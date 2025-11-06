import {Label} from "@radix-ui/react-menu";
import {Controller} from "react-hook-form";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react";

const SelectField = ({name,label,placeholder,options,control,error,required=false}: SelectFieldProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">{label}</Label>

            <Controller
                render={({field})=> (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            {options.map((option)=>(
                                <SelectItem value={option.value} key={option.value} className="focus:bg-ray-600 focus:text-white">
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                        {error && <p className="text-sm text-red-500">{error.message}</p>}
                    </Select>
                )}
                name={name}
                control={control}
                rules={{
                    required: required ? `Please select ${label.toLowerCase()}`: false,
                }}



            />
        </div>
    )
}
export default SelectField
