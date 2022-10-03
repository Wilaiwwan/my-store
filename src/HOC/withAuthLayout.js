import AuthLayout from "../common/AuthLayout";

function withAuthLayout(WrapperComponent) {
    return (
        <AuthLayout>
            <WrapperComponent />
        </AuthLayout>
    );
}

export default withAuthLayout;
