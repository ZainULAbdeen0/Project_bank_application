import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from './ui/form'
import { Input } from "@/components/ui/input";
import { ITEMS } from '@/constants';
import { Control, UseFormReturn, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import {z} from "zod"

const formSchema = authFormSchema("Sign-Up")
interface CustomInput {
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
  control: Control<z.infer<typeof formSchema>>
}

const CustomInput = ({control, placeholder, label, name} : CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className='form-item'>
        <FormLabel className='form-label'>  
            {label}
        </FormLabel>
        <div className="flex w-full flex-col">
            <FormControl>
                <Input
                    placeholder={placeholder}
                    type = {name === "password" ? "password" : "text"}
                    className='input-class'
                    {...field} 
                />
            </FormControl>
            <FormMessage className='form-message mt-2'/>
        </div>
      </div>
    )}
  />
  )
}

export default CustomInput