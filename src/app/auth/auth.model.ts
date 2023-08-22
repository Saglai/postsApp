export class SignUpModel {
    login: string = '';
    password: string = '';
}

export class SignInModel extends SignUpModel {
}

export class OperationResult {
    isSuccess: boolean = false;
    failMessage?: string = '';
}
