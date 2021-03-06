<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExtraRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'extra_fridge' => ['boolean'],
            'extra_oven' => ['boolean'],
            'extra_garage' => ['boolean'],
            'extra_laundary' => ['boolean'],
            'extra_blinds' => ['boolean'],
        ];
    }
}
