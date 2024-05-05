import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";


export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
    return (
        <div>
            <Form >
                <TextInputWithLabel label={"Email"} name={'email'} value={form.email} type={'email'} placeholder={'Enter Email'} onChange={handleChange} />
                <TextInputWithLabel label={"Password"} name={'password'} value={form.password} type={'password'} placeholder={'Enter Password'} onChange={handleChange} />

                <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary" type="submit">
                    Submit
                </SButton>
            </Form>
        </div>
    )
}
