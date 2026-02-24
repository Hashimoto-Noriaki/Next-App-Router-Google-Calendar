import { z } from 'zod'

export const loginSchema = z.object({
    email: z
        .string()
        .min(1,"メールアドレスを入力してください")
        .email("メールアドレスを正しく入力してください"),
    password: z
        .string()
        .min(1,"パスワードを入力してください")
        .min(8,"パスワードを8文字以上で入力してください")
})

export type LoginFormData = z.infer<typeof loginSchema>
