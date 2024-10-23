import { createClient } from '@/utils/supabase/server'

type BlueprintTypeParams = {
  params: {
    typeID: string
  }
}

const BlueprintType = async ({ params: { typeID } }: BlueprintTypeParams) => {
  const supabase = createClient()
  const {
    data: { typeName, description },
  } = await supabase.schema('evesde').from('invTypes').select().eq('typeID', typeID).single()
  return (
    <>
      <h1>{typeName}</h1>
      <pre>Slug: {JSON.stringify({ typeName, description }, undefined, 2)}</pre>
    </>
  )
}

export default BlueprintType
