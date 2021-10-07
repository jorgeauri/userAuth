import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//configurações do app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurações de rotas
app.use(statusRoute);
app.use(usersRoute);
app.use(authorizationRoute);

//configuração dos handlers de erro
app.use(errorHandler);

//inicialização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});
