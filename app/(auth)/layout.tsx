
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div>
        <h1>header</h1>
            {children}
        <h1>footer</h1>
        </div>
    )
}