import { Input } from "forging-react";
import { NextPage } from "next";
import styles from '../../styles/PageCreate.module.css'
import { useRouter } from 'next/router'
import PageGenerator from '../../components/PageGenerator';

const CreatePage: NextPage = () => {

    const router = useRouter();        
    return (
        <div className={styles.container}>
            <form>
                <Input label="Title" type='floating' />
                <Input label="URL" type='floating' placeholder={router.pathname} />
                <Input label="Description" type='floating-textarea' />
                <h3>Page:</h3>
                <PageGenerator />
            </form>
        </div>
    )
}

export default CreatePage;