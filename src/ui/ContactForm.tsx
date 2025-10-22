'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import CheckAnimation from './CheckAnimation'

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
  {
    id: 'Passo 1',
    name: 'Informações pessoais',
    fields: ['firstname', 'lastname', 'email', 'phone']
  },
  {
    id: 'Passo 2',
    name: 'Informações da empresa',
    fields: ['company', 'jobtitle', 'faturamento_anual', 'message']
  },
  { id: 'Passo 3', name: 'Enviar informações' }
]

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    console.log(data);
    try {
      const res = await fetch('/api/email/', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        console.log('Form submitted successfully:', responseData);
      } else {
        console.error('Form submission failed:', responseData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    reset()
  }

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <div className='flex flex-col xl:flex-row pt-2 gap-8 xl:pt-0 xl:gap-[70px]'>
      <section className='inset-0 flex flex-col justify-between p-0'>
        {/* Form */}
        <form className='' onSubmit={handleSubmit(processForm)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Pessoal
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Forneça seus dados para que possamos entender suas necessidades
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                <div className="relative sm:col-span-3">
                  <input
                    type="text"
                    id="firstname"
                    {...register('firstname')}
                    autoComplete='given-name'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default" />
                  <label htmlFor="firstname"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none text-gray-500 transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Nome *</label>
                  {errors.firstname?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="relative sm:col-span-3">
                  <input
                    id="lastname"
                    type="text"
                    {...register('lastname')}
                    autoComplete='family-name'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent outline-none focus:ring-2 focus:bg-white focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default" />
                  <label
                    htmlFor="lastname"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none text-gray-500 transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Sobrenome *</label>
                  {errors.lastname?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
                <div className="relative sm:col-span-6">
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    autoComplete='email'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default" />
                  <label htmlFor="email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none text-gray-500 transition ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">E-mail corporativo *</label>
                  {errors.email?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative sm:col-span-6">
                  <input
                    type="text"
                    id="phone"
                    {...register('phone')}
                    autoComplete='phone'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default" />
                  <label
                    htmlFor="phone"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition text-gray-500 ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Telefone *</label>
                  {errors.phone?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Empresa
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Informações sobre a empresa que você representa
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                <div className="relative sm:col-span-3">
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    autoComplete='given-company'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default" />
                  <label htmlFor="company" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none text-gray-500 transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Nome da empresa *</label>
                  {errors.firstname?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="relative sm:col-span-3">
                  <input
                    type="text"
                    id="jobtitle"
                    {...register('jobtitle')}
                    autoComplete='job-function'
                    className="peer ring-1 ring-inset ring-gray-300 p-4 block w-full border-gray-200 rounded-lg text-sm text-gray-500 placeholder:text-transparent outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none 
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="default"
                  />
                  <label
                    htmlFor="jobtitle"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition text-gray-500 ease-in-out duration-100 border border-transparent  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Função *</label>
                  {errors.jobtitle?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.jobtitle.message}
                    </p>
                  )}
                </div>
                <div className="max-h-40 relative sm:col-span-6">

                  <label
                    htmlFor="message"
                    className="sr-only">Comentários</label>

                  <textarea
                    id='message'
                    {...register('message')}
                    autoComplete='postal-code'
                    className="ring-1 ring-inset ring-gray-300 text-gray-500 py-3 px-4 block w-full border-gray-200 
                    rounded-lg text-sm outline-none focus:ring-2 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 
                    disabled:pointer-events-none placeholder:text-gray-500 placeholder:text-sm
                    resize-none" rows={3} placeholder="Comentários"></textarea>
                  {errors.message?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <>
            <div className='flex gap-6'>
            <CheckAnimation />
              <div>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Finalizado
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Obrigado pela sua sua solicitação, em breve um de nossos especialistas entrará em contato com você.
                </p>
              </div>
              </div>
            </>
          )}
        </form>

        {/* Navigation */}
        <div hidden={currentStep === steps.length - 1} className='pt-6'>
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className='w-full py-3 px-12 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-500/90 disabled:hidden disabled:pointer-events-none'
            >
              Enviar
            </button>
          </div>
          <div hidden={currentStep === 1} className='flex items-center justify-center pt-4'>
            <p hidden={currentStep === 1} className="text-base">Já possui uma conta?<Link target="_blank" className="pl-2 text-amber-500" href={"https://loja.food2b.neexor.com/"}>Entre aqui.</Link></p>
          </div>
        </div>
      </section>
    </div>

  )
}