import React from "react";
import { Box, Button, Form, FormField, Grommet, Heading, Tab, Tabs, TextInput } from "grommet";


const Onboarding = ({ userId }) => {
    const [value, setValue] = React.useState({});
    return (
        <Grommet plain>
            <div>
                <Heading margin="none">{userId}</Heading>
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => {}}
                    >
                    <FormField name="name" htmlFor="text-input-id" label="Name">
                        <TextInput id="text-input-id" name="name" />
                    </FormField>
                    <FormField name="celphone" htmlFor="text-input-celphone" label="Celphone">
                        <TextInput id="text-input-celphone" name="celphone" />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                        <a href="/dashboard" target="_parent">Ir al dashboard</a>
                    </Box>
                </Form>
            </div>
        </Grommet>
    );
}

export const getServerSideProps = async (context) => {

    const { query, params } = context;

    return {
        props: { userId: query.id || "abib flores" }
    };
};

export default Onboarding;