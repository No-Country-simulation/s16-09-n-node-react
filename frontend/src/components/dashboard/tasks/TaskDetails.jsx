import { useState, useEffect } from 'react';
import { Button, Input, Modal, Select, DatePicker, Form } from 'antd';
import { useTheme } from '@/context/themecontext';
import moment from 'moment';
import axios from 'axios';

const { TextArea } = Input;

const Tasks = () => {
  // 1. Estado del componente
  const [activeTab, setActiveTab] = useState('UX/UI'); // Tab activa
  const [todos, setTodos] = useState([]); // Todas las tareas
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visible
  const [form] = Form.useForm(); // Formulario

  // 2. Contexto del tema y usuario
  const { theme } = useTheme();
  const user = 'user';

  // 3. Constantes
  const tabs = ['UX/UI', 'Frontend', 'Backend', 'Data Analysis']; // Roles de tareas
  const statuses = ['Por realizar', 'En proceso', 'Revisiones', 'Terminadas']; // Estados de tareas
  const API_URL = 'https://crudcrud.com/api/e823e81df58e4f9fb66d1168d8b93d69/todos/'; // URL de API

  // 4. Función auxiliar para ajustar filtros de acuerdo al tema
  const getFilterStyle = () => (theme.text === '#e8e8e8' ? 'invert(0)' : 'invert(1)');

  // 5. Efecto secundario para cargar tareas iniciales
  useEffect(() => {
    fetchTodos();
  }, []);

  // 6. Función para obtener tareas del servidor
  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // 7. Función para agregar una nueva tarea
  const handleAddTodo = async (values) => {
    try {
      await axios.post(API_URL, {
        ...values,
        dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
      });
      form.resetFields();
      setIsModalVisible(false);
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // 8. Función para eliminar una tarea
  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // 9. Función para editar una tarea
  const handleEditTodo = (todo) => {
    form.setFieldsValue({
      ...todo,
      dueDate: todo.dueDate ? moment(todo.dueDate) : null,
    });
    setIsModalVisible(true);
  };

  // 10. Función para actualizar una tarea existente
  const handleUpdateTodo = async (values) => {
    try {
      await axios.put(`${API_URL}${values._id}`, {
        ...values,
        dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
      });
      form.resetFields();
      setIsModalVisible(false);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // 11. Filtrar tareas según el rol activo
  const filteredTodos = todos.filter((todo) => todo.role === activeTab);

  // 12. Renderizar el componente
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" style={{ backgroundColor: theme.background }}>
      <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>Tareas</h2>
      <p className="text-lg mb-6" style={{ color: theme.subtitulos }}>
        Red social para compartir skills
      </p>
      <button
        className="bg-black"
        onClick={() => {
          form.resetFields();
          setIsModalVisible(true);
        }}
        style={{ color: theme.text }}
      >
        <img
          alt="plus-icon"
          src="/assets/plus-icon.svg"
          className="docs-plus-icon"
          style={{ filter: getFilterStyle() }}
        />
        Agregar
      </button>
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-medium border rounded ${
                activeTab === tab
                  ? 'text-blue-500 border-blue-500'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
              style={{ color: activeTab === tab ? theme.text : 'inherit' }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div key={status} className="p-4 shadow rounded-lg" style={{ backgroundColor: theme.backgroundSecondary }}>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>{status}</h3>
            {filteredTodos
              .filter((todo) => todo.status === status)
              .map((todo) => (
                <div key={todo._id} className="flex items-center mb-4">
                  <p>{todo.text}</p>
                  <Button type="primary" onClick={() => handleEditTodo(todo)}>
                    Editar
                  </Button>
                  <Button type="dashed" onClick={() => handleDeleteTodo(todo._id)}>
                    Eliminar
                  </Button>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Modal
        title="Agregar/Editar tarea"
        open={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              if (values._id) {
                handleUpdateTodo(values);
              } else {
                handleAddTodo(values);
              }
            })
            .catch((info) => {
              console.error('Validate Failed:', info);
            });
        }}
        onCancel={() => setIsModalVisible(false)}
        okText="Agregar"
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="text" label="Nombre de la tarea" rules={[{ required: true, message: 'Por favor ingresa el nombre de la tarea' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="project" label="Proyecto" rules={[{ required: true, message: 'Por favor ingresa el proyecto' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Rol" rules={[{ required: true, message: 'Por favor selecciona un rol' }]}>
            <Select>
              {tabs.map((tab) => (
                <Select.Option key={tab} value={tab}>{tab}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Por favor selecciona un estado' }]}>
            <Select>
              {statuses.map((status) => (
                <Select.Option key={status} value={status}>{status}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="participant" label="Participante" rules={[{ required: true, message: 'Por favor selecciona un participante' }]}>
            <Select>
              <Select.Option key={user} value={user}>{user}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="dueDate" label="Fecha de vencimiento">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="message" label="Mensaje" rules={[{ required: true, message: 'Por favor ingresa un mensaje' }]}>
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Tasks;
