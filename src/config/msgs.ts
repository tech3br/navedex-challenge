import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Documentação
//https://github.com/fkhadra/react-toastify#usage
//https://fkhadra.github.io/react-toastify/

// Serve para configurar o toast veja a documentação
// toast.configure()

export const success = (msg = 'Operação realizada com sucesso!') =>
  toast.success(msg);
export const info = (msg: string) => toast.info(msg);
export const warning = (msg: string) => toast.warn(msg);
export const erro = (msg = 'Ops.. Erro inesperado.') => toast.error(msg);
export const padrao = (msg: string) => toast(msg);

export default { success, info, warning, erro, padrao };
