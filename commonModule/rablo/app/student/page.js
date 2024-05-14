'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect } from 'react';

export default function MyPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/student/dashboard');
  }, [router]);

  return (
    <main className={styles.main}>
    </main>
  );
}
