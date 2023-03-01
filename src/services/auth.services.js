import { Auth } from "@aws-amplify/auth";
import { Amplify } from "@aws-amplify/core";

Amplify.configure({
  Auth: {
    authenticationFlowType: "USER_PASSWORD_AUTH",
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: "us-east-1_zMQcShhcJ",
    userPoolWebClientId: "21op3d72nr6hsjquqvf3ohg8n5",
  },
});

export class AuthService {
  async login(userData) {
    console.log("login");
    let auth = await Auth.signIn({
      username: userData.username,
      password: userData.password,
    });

    return auth;
  }

  signOut() {
    return Auth.signOut()
      .then(() => {
        return { status: true, message: "User logout." };
      })
      .catch((e) => console.log(e));
  }
}
