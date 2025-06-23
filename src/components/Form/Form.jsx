import { useForm } from "react-hook-form";
import { useCreateAccount } from "./hooks/useCreateAccount";

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: "onBlur",
	});

	const createAnAccount = useCreateAccount();

	const onSubmit = (data) => {
		createAnAccount(data.name, data.username);
		reset();
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				User name:
				<input
					{...register("name", {
						required: true,
						minLength: {
							value: 2,
							message: "minimum 2 characters of name",
						},
					})}
				/>
			</label>
			<label>
				User surname:
				<input
					{...register("surname", {
						required: true,
						minLength: {
							value: 2,
							message: "minimum 2 characters of surname",
						},
					})}
				/>
			</label>
			<button type="submit" disabled={!isValid}>
				Create account
			</button>
			{errors?.name && <span>{errors?.name?.message || "This field name is required"}</span>}
			{errors?.surname && <span>{errors?.surname?.message || "This field surname is required"}</span>}
		</form>
	);
};
