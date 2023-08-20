<template>
    <div class="p-6 bg-dark1 border border-gray-200 rounded-lg shadow hover:bg-gray-600">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white ">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-200">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div class="flex justify-evenly mt-5">
            <button class="bg-blue2 hover:bg-blue2hover focus:bg-blue2click px-2.5 py-1.5 rounded-md">
                <ClientOnly>
                    <Icon name="uil:edit" size="20"></Icon> 
                </ClientOnly>
                
                <span>Edit</span>
            </button>
            <button class="bg-red1 hover:bg-red1hover focus:bg-red1click px-2.5 py-1.5 rounded-md">
                <ClientOnly>
                    <Icon name="material-symbols:delete" size="20"></Icon>    
                </ClientOnly>
                <span>Hapus</span>
            </button>
        </div>
        
    </div>
</template>