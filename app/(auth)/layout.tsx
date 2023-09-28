const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-center h-full bg-[url('https://picsum.photos/1920/1080.webp/?blur')] bg-cover bg-no-repeat bg-center">
      {children}
    </div>
  )
}

export default AuthLayout
