export class AppConstantes {

	public static get baseServidor(): string { return "http://localhost:8081/" }

	public static get baseLogin(): string { return this.baseServidor + "auth/login"}

	public static get baseURL(): string { return this.baseServidor + "api/usuario"}

}
