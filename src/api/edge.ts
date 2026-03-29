import { supabase } from '@/lib/supabase'

export const edgeApi = {
  invoke: async <TReq extends Record<string, unknown>, TRes>(
    name: string,
    body: TReq,
  ): Promise<TRes> => {
    const { data, error } = await supabase.functions.invoke(name, { body })
    if (error) throw new Error(error.message)
    return data as TRes
  },
}
