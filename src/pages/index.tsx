import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { getPage } from '../api/page'
import { IPage } from '../model/page_builder'
import { AppThunkDispatch } from '../redux/types'
import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch<AppThunkDispatch>();

  const { data } = useQuery<IPage>([`pg`], async () => {
    const response = await dispatch(getPage())
    return response;
  })
  
  return (
    <div className={styles.container}>
 
    </div>
  )
}
