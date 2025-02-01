export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Deploy Next.js to AWS EKS</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Build your Next.js project into a Docker image
          </li>
          <li className="mb-2">
            Push the image to AWS Elastic Container Registry (ECR) !!</li>
          <li className="mb-2">
            Deploy the image on AWS Elastic Kubernetes Service (EKS) !!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://aws.amazon.com/ecr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS ECR
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://kubernetes.io/docs/concepts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Kubernetes
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS EKS Guide
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker Docs
        </a>
      </footer>
    </div>
  );
}
