import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button, Input, Modal, Select, DatePicker, Row, Col, Form } from 'antd';
import { useTheme } from '@/context/themecontext';
import { useUser } from '@clerk/clerk-react';
import './TodoCRUD.css'; // Puedes eliminar esto si ya no es necesario

const { TextArea } = Input;

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('UX/UI');
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { theme } = useTheme();
  //const { user } = useUser();
 const user = "user"

  const tabs = ['UX/UI', 'Frontend', 'Backend', 'Data Analysis'];
  const statuses = ['Por realizar', 'En proceso', 'Revisiones', 'Terminadas'];
  const URL = "https://crudcrud.com/api/aeca53532e2d4381abb08f9c88d94bf8/todos/";

  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get(URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async (values) => {
    try {
      await axios.post(URL, {
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

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${URL}${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEditTodo = (todo) => {
    form.setFieldsValue({
      ...todo,
      dueDate: todo.dueDate ? moment(todo.dueDate) : null,
    });
    setIsModalVisible(true);
  };

  const handleUpdateTodo = async (values) => {
    try {
      await axios.put(`${URL}${values._id}`, {
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

  useEffect(() => {
    fetchTodos();
  }, []);
console.log(user, "user")
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" style={{ backgroundColor: theme.background }}>
      <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>Tareas</h2>
      <p className="text-lg mb-6" style={{ color: theme.subtitulos }}>
        Red social para compartir skills
      </p>
      <Button 
        type="primary" 
        className="flex items-center mb-4" 
        onClick={() => {
          form.resetFields();
          setIsModalVisible(true);
        }}
        style={{ color: theme.text }}
      >
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='docs-plus-icon'
          style={{ filter: getFilterStyle() }}
        />
        Agregar tarea
      </Button>
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-medium ${
                activeTab === tab
                  ? 'text-blue-500 border-b-2 border-blue-500'
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
            {todos
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
              <Select.Option key={user.id} value={user}>{user}</Select.Option>
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
