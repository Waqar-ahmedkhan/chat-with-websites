interface PageProps {
    params: {
        url: string | string[] | undefined,
    }
}
function page({params}: PageProps) {
  return (
    <div>hello</div>
  )
}

export default page