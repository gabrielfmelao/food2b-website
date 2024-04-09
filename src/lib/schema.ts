import { z } from 'zod'


export const FormDataSchema = z.object({
  firstname: z.string().min(1, 'O nome é obrigatório'),
  lastname: z.string().min(1, 'O sobrenome é obrigatório'),
  email: z.string().min(1, 'O e-mail é obrigatório').email('E-mail inválido'),
  jobtitle: z.string().min(1, 'O cargo é obrigatório'),
  company: z.string().min(1, 'Nome da empresa é obrigatório'),
  message: z.string()
  .max(300, { message: 'A mensagem deve ter no máximo 300 caracteres'})
  .optional(),
  phone: z.string()
  .min(1, 'O telefone é obrigatório')
  .regex(/^[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4,5}[-\s\.]?[0-9]{4}$/, 'Telefone inválido')
  .transform(value => {
  const digitsOnly = value.replace(/\D/g, ''); // Remove caracteres não numéricos
      const countryCode = '+55';
      const ddd = digitsOnly.slice(0, 2);
      const phoneNumber = digitsOnly.slice(2);

      // Formatação do número
      return `${countryCode}-${ddd}-${phoneNumber.substring(0, 4)}-${phoneNumber.substring(4)}`;
    },),
  lifecyclestage: z.string().default('marketingqualifiedlead'),
  hs_lead_status:z.string().default('NEW'),
  origem_do_lead:z.string().default('Contato Site')

})

