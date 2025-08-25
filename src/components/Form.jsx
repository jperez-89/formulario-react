// import { useFormUser } from '../hooks/useForm';

// export const Form = () => {
export const Formulario = ({
    Form,
    handleChange,
    handleSubmit,
}) => {
    /** FUNCIONES ORIGINALES CON EL QUE SE EJCUTA BIEN EL INSERT EN DATABASE
    const [form, setForm] = useState({
        name: '',
        email: '',
        dob: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log(form);

        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        const data = await response.json()
        console.log(data);

    }; */

    // const {
    //     Form,
    //     handleChange,
    //     handleSubmit,
    // } = useFormUser()

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
                type="text"
                name="name"
                value={Form.name}
                onChange={handleChange}
            // required
            />
            <label>Correo electrónico:</label>
            <input
                type="email"
                name="email"
                value={Form.email}
                onChange={handleChange}
            // required
            />
            <label>Fecha de nacimiento:</label>
            <input
                type="date"
                name="dob"
                value={Form.dob}
                onChange={handleChange}
            // required
            />
            <label>Usuario:</label>
            <input
                type="text"
                name="username"
                value={Form.username}
                onChange={handleChange}
            // required
            />
            <label>Contraseña:</label>
            <input
                type="password"
                name="password"
                value={Form.password}
                onChange={handleChange}
            // required
            />
            <button type="submit">Enviar</button>
        </form>

    );
};