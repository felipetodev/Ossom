import { PostPreview } from '../../components' 
import styles from './Blog.module.css'

export default function Blog({ posts }) {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Artículos recomendados</h2>
                <p>Enterate de nuestros últimos posts dedicados a tecnologia y transformación digital.</p>
            </div>
            <div className={styles.grid}>
                {posts.map(post => (
                    <div key={post.slug}>
                        <PostPreview 
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            excerpt={post.excerpt}
                            author={post.author}
                            slug={post.slug}
                        />
                    </div>

                ))}
            </div>
            <button>Ver más</button>
        </section>
    )
}
