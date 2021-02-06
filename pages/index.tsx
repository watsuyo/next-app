import Layout from '../components/Layout'
import AppImage from '../components/AppImage'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <AppImage image="https://is.gd/04cRdb" width="w-auto" />
        <div className="bg-indigo-900">
          <div className="py-5">
            <AppImage image="https://is.gd/04cRdb" width="w-5/12" />
          </div>
        </div>
        <div className="bg-blue-200">
          <div className="py-4 w-48 mx-auto">
            <AppImage image="https://is.gd/04cRdb" width="w-5/12" />
          </div>
          <p>名前</p>
          <p>プロフィール</p>
          <p className="pt-5">スキル</p>
          <div className="py-5 flex">
            <div className="flex-1">
              <AppImage image="https://is.gd/04cRdb" width="w-5/12" />
              <p>デザイン</p>
            </div>
            <div className="flex-1">
              <AppImage image="https://is.gd/04cRdb" width="w-5/12" />
              <p>写真</p>
            </div>
            <div className="flex-1">
              <AppImage image="https://is.gd/04cRdb" width="w-5/12" />
              <p>ライター</p>
            </div>
          </div>
          <p className="py-5">アプリケーション</p>
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
