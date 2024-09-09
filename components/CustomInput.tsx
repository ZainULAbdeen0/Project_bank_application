import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from './ui/form'
import { Input } from "@/components/ui/input";
import { ITEMS } from '@/constants';
import { UseFormReturn } from 'react-hook-form';



const CustomInput = ({form, placeholder, label}:{placeholder:string , label:string , form:UseFormReturn}) => {
  return (
    <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
      <div className='form-item'>
        <FormLabel className='form-label'>  
            {label}
        </FormLabel>
        <div className="flex w-full flex-col">
            <FormControl>
                <Input
                    placeholder={placeholder}
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