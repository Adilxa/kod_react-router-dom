import { useForm } from 'react-hook-form';

const MyForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input {...register('name', { required: "This field should be filled" })} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Please enter a valid email address"
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


export default MyForm;


