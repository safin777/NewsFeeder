import NewsList from './NewsList'
import RelatedNews from './RelatedNews'

export default function NewsBoard() {
  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container grid grid-cols-12 gap-8 mx-auto">
          <NewsList />
          <RelatedNews />
        </div>
      </main>
    </>
  )
}
