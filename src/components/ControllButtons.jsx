

import React from 'react'
import { Button } from './ui/button'
import { useControl } from '@/hooks/useControl'
import {PAGES} from "@/utils/constantes"

function ControllButtons() {
    // states
    const {goToNext, goToPrev, current} = useControl()

    // logique
    const goToPrecedentPage = () => {
        goToPrev()
    }
    const goToNextPage = () => {
        goToNext()
    }

  return (
    <div className="flex flex-row gap-2">
        {current > 1 && <Button onClick={goToPrecedentPage}>Prev</Button>}
        {current !== Object.keys(PAGES).length && <Button onClick={goToNextPage}>Next</Button>}
    </div>
  )
}

export default ControllButtons