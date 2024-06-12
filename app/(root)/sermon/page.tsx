import Breadcrumbs from '@/components/commons/Breadcrumbs'
import Section from '@/components/sermon/Section'
import { fetchSermons } from '@/lib/actions/sermon.actions'
import { Loader2 } from 'lucide-react'
import React from 'react'

const page = async () => {
  const sermon = (await fetchSermons()) || []
  return (
    <>
      <Breadcrumbs
        pageName="Sermons"
        description="At Altar of Grace, our sermons serve as a bridge between God&apos;s timeless word and our daily lives."
      />

      <Section sermon={sermon} />
      {sermon.length <= 0 && (
          <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
              <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
              <h3 className='font-semibold text-xl'>
                Oops!. No Sermons yet
              </h3>
              <p>Please come back later to read our content. God bless yo.</p>
            </div>
          </div>
        )}
    </>
  )
}

export default page
