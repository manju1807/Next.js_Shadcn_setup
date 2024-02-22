import * as React from 'react'

import { ThemeToggle } from '@/components/theme-toggle'
import TaskPage from './components/tasks'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container space-y-6'>
        <div className='flex justify-between'>
          <h1 className=' text-3xl font-bold'>Payment Management</h1>
          <ThemeToggle />
        </div>
        <TaskPage />
      </div>
    </section>
  )
}
