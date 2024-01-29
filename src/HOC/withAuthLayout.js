import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";

function withAuthLayout(WrapperComponent) {
    return (
        <AuthLayout>
            <WrapperComponent />
        </AuthLayout>
    );
}

export default withAuthLayout;
