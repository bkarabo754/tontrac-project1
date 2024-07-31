import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = ({ className, label, register, error, errorMessage, id, ...props }) => {
  return (
    <div>
      <textarea
        className={`border py-2 px-3 rounded-md w-full md:max-w-[600px] ${error ? 'border-destructive' : 'border-accent'} text-text bg-background-light focus:outline-none focus:ring focus:border-accent`}
        id={id}
        {...register(id, {required: `${label} is required`, validate: props.validate})}
        // ref={ref}
        {...props}
        
        />
        {error && <span className="text-sm text-destructive mt-1">{errorMessage}</span>}

    </div>
      )
  }
// Textarea.displayName = "Textarea"

export { Textarea }
