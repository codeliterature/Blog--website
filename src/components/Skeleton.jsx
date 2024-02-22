import React from 'react';

const Skeleton = () => {
  return (
    <div className="border border-slate-200 m-2 p-4 w-[300px]">
      <div className="animate-pulse flex flex-col">
      <h3 className='pb-2 bg-slate-200 h-6 rounded'></h3>
      <p className="text-justify my-4 bg-slate-200 h-12 rounded"></p>
           <div className='bg-slate-200 w-16 h-6 rounded my-2'></div>
      <div className='flex flex-col space-y-2'>
        <button className='p-1 rounded bg-slate-200 h-8 rounded' >
        </button>
        <div className="flex justify-between items-center py-1">
 <div className='bg-slate-200 w-16 h-6 rounded'></div>
      <div className='bg-slate-200 w-16 h-6 rounded'></div>
          </div>
</div>
      </div>
    </div>
  );
};

export default Skeleton;