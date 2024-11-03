const Skeleton = () => (
  <div className="border border-gray-200 p-3 rounded h-80">
  <div className="h-40 w-full bg-gray-100 rounded overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gray-200 after:to-transparent after:-translate-x-full after:animate-[shimmer_2s_infinite]">
  </div>  
  <div className="flex flex-col gap-3 pt-3">
    <h3 className="h-5 bg-gray-100 overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gray-200 after:to-transparent after:-translate-x-full after:animate-[shimmer_2s_infinite]"></h3>
    <div className={"flex justify-between gap-2"} >
      <h4 className="h-4 w-14 bg-gray-100 overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gray-200 after:to-transparent after:-translate-x-full after:animate-[shimmer_2s_infinite]"></h4>
      <h4 className="h-4 w-14 bg-gray-100 overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gray-200 after:to-transparent after:-translate-x-full after:animate-[shimmer_2s_infinite]"></h4>
    </div>
  </div>
</div>
  );
  
  
  export default Skeleton