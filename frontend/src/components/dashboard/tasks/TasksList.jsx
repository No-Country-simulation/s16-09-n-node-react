import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button, Input, Modal, Select, DatePicker, Row, Col } from 'antd';
import imag from './tasklist.svg';
import './TodoCRUD.css'; // Estilos personalizados

const { Option } = Select;
const URL = "https://crudcrud.com/api/1ef4750d29f6433f8d80660ec09438a7/todos/";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('UX/UI');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [dueDate, setDueDate] = useState(null);
  const [editTodo, setEditTodo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const tabs = ['UX/UI', 'Frontend', 'Backend', 'QA', 'Data Analysis'];

  const fetchTodos = async () => {
    try {
      const response = await axios.get(URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async () => {
    try {
      await axios.post(URL, {
        text: newTodo,
        hashtags: selectedHashtags,
        dueDate: dueDate ? dueDate.format('YYYY-MM-DD') : null,
        category: activeTab,
      });
      setNewTodo('');
      setSelectedHashtags([]);
      setDueDate(null);
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
    setEditTodo(todo);
    setIsModalVisible(true);
  };

  const handleUpdateTodo = async () => {
    try {
      await axios.put(`${URL}${editTodo._id}`, editTodo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsModalVisible(false);
      setEditTodo(null);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="text-white flex flex-col gap-0 ml-0">
        <NavLink to={'/dashboard/add-task'}></NavLink>
        <ul className="list-none">
          <img src={imag} alt="tasklist" onClick={() => alert('En desarrollo')} />
        </ul>
      </div>

      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tareas</h2>
        <p className="text-lg text-gray-600 mb-6">Red social para compartir skills</p>
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
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <Row gutter={16} className="mb-4">
          <Col xs={24} sm={12} md={8}>
            <Input
              placeholder="Enter a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Select
              mode="tags"
              placeholder="Select hashtags"
              value={selectedHashtags}
              onChange={(values) => setSelectedHashtags(values)}
              style={{ width: '100%', marginBottom: '10px' }}
            >
              <Option key="work">Work</Option>
              <Option key="personal">Personal</Option>
              <Option key="urgent">Urgent</Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <DatePicker
              placeholder="Due Date"
              value={dueDate}
              onChange={(date) => setDueDate(date)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </Col>
          <Col xs={24} sm={12} md={4}>
            <Button type="primary" onClick={handleAddTodo}>
              Add Todo
            </Button>
          </Col>
        </Row>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tabs.map((tab) => (
            <div key={tab} className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{tab}</h3>
              {todos
                .filter((todo) => todo.category === tab)
                .map((todo) => (
                  <div key={todo._id} className="flex items-center mb-4">
                    <img
                      src={todo.imgSrc || '/default.png'}
                      alt="Collaborator"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <p>{todo.text}</p>
                    <Button type="primary" onClick={() => handleEditTodo(todo)}>
                      Edit
                    </Button>
                    <Button type="dashed" onClick={() => handleDeleteTodo(todo._id)}>
                      Delete
                    </Button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <Modal
        title="Edit Todo"
        open={isModalVisible}
        onOk={handleUpdateTodo}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Enter todo text"
          value={editTodo?.text}
          onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
        />
        <DatePicker
          placeholder="Due Date"
          value={dueDate}
          onChange={(date) => setDueDate(date)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <Select
          mode="tags"
          placeholder="Select hashtags"
          value={editTodo?.hashtags}
          onChange={(values) => setEditTodo({ ...editTodo, hashtags: values })}
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </Modal>
    </div>
  );
};

export default Tasks;
