import { useState, useEffect } from 'react';
import { Button, Input, Modal, Select, DatePicker, Form } from 'antd';
import { useTheme } from '@/context/themecontext';
import moment from 'moment';
const { TextArea } = Input;
import imagen from "./image.png"
import "./tasklist.css"

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('UX/UI');
  const [todos, setTodos] = useState([
    {
      _id: 1,
      text: 'Hero Section de Landing Page',
      project: 'Alta Prioridad',
      role: 'UX/UI',
      status: 'Por realizar',
      participant: 'Mariana Venegas',
      dueDate: null,
      message: 'Diseño de la primera sección del landing page que dirigira a los usuarios a realizar las acciones...',
      userPhoto: imagen
    },
    {
      _id: 2,
      text: 'Footer',
      project: 'Alta Prioridad',
      role: 'UX/UI',
      status: 'En proceso',
      participant: 'Mariana Venegas',
      dueDate: null,
      message: 'Organizar la información que debe tener el footer del landing page',
      userPhoto: imagen
    },
    {
      _id: 3,
      text: 'Cards',
      project: 'Alta Prioridad',
      role: 'UX/UI',
      status: 'Revisiones',
      participant: 'Mariana Venegas',
      dueDate: null,
      message: 'Cards que contienen los beneficios y ventajas del proyecto',
      userPhoto: imagen
    }
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { theme } = useTheme();

  const tabs = ['UX/UI', 'Frontend', 'Backend', 'Data Analysis', 'QA'];
  const statuses = ['Por realizar', 'En proceso', 'Revisiones', 'Terminadas'];

  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  const handleAddTodo = (values) => {
    const newTodo = {
      ...values,
      _id: todos.length + 1,
      dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
      userPhoto: 'URL_A_LA_FOTO_DE_MARIANA'
    };
    setTodos([...todos, newTodo]);
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const handleEditTodo = (todo) => {
    form.setFieldsValue({
      ...todo,
      dueDate: todo.dueDate ? moment(todo.dueDate) : null,
    });
    setIsModalVisible(true);
  };

  const handleUpdateTodo = (values) => {
    const updatedTodos = todos.map(todo => todo._id === values._id ? { ...values, dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null } : todo);
    setTodos(updatedTodos);
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md" style={{ backgroundColor: theme.background }}>
      <Button data-aos="fade-left" 
        className="relative justify-center bg-red"
        onClick={() => {
          form.resetFields();
          setIsModalVisible(true);
        }}
        style={{ color: theme.subtitulos, backgroundColor: theme.background, border: "0", marginTop: "0%", fontSize: "large" }}
      >
        <img data-aos="fade-left" 
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='docs-plus-icon'
          style={{ filter: getFilterStyle() }}
        />
        Agregar tarea
      </Button>
      <h2 className="text-2xl font-semibold mb-4"  data-aos="fade-left"  style={{ color: theme.text }}>Tareas</h2>
      <p className="text-lg mb-6" style={{ color: theme.subtitulos }} data-aos="fade-left" >
        Red social para compartir skills
      </p>

      <div className="mb-6" data-aos="fade-left" >
        <div className="flex space-x-4 border-b border-gray-300" data-aos="fade-left" >
          {tabs.map((tab) => (
            <button data-aos="fade-left" 
              key={tab}
              className={`py-2 px-4 text-lg font-medium ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'}`}
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
            <h3 className="text-xl flex  font-semibold mb-2" style={{ color: theme.text }}>{status}</h3>
            {todos.filter(todo => todo.status === status).map(todo => (
              <div key={todo._id} className="flex flex-col items-top mt-0">
                <p>{todo.text}</p>
                <Button type="primary" onClick={() => handleEditTodo(todo)}>
                  Editar
                </Button>
                <Button type="dashed" onClick={() => handleDeleteTodo(todo._id)}>
                  Eliminar
                </Button>
                <img src={todo.userPhoto} alt={`${todo.participant}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        title="Agregar Tarea"
        open={isModalVisible}
        onOk={() => {
          form.validateFields().then(values => {
            if (values._id) {
              handleUpdateTodo(values);
            } else {
              handleAddTodo(values);
            }
          }).catch(info => {
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
          <Form.Item name="project" label="Proyecto" rules={[{ required: true, message: 'Por favor ingresa el proyecto' }]}   >
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Rol" rules={[{ required: true, message: 'Por favor selecciona un rol' }]} style={{ color: "red" }}>
    <Select getPopupContainer={() => document.body} style={{ color: "black", opacity: "1" }}>
      {tabs.map(tab => (
        <Select.Option style={{ color: "black" }} key={tab} value={tab}>{tab}</Select.Option>
      ))}
    </Select>
  </Form.Item>
          <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Por favor selecciona un estado' }]}>
            <Select>
              {statuses.map(status => (
                <Select.Option key={status} value={status}>{status}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="participant" label="Participante" rules={[{ required: true, message: 'Por favor selecciona un participante' }]}>
            <Select>
              <Select.Option key={'Mariana Venegas'} value={'Mariana Venegas'}>Mariana Venegas</Select.Option>
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
