
const Timeline = () => {
  return (
<ol
  class="relative space-y-24 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-800 dark:before:bg-gray-700"
>
  <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span class="size-3 shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500 "></span>
      <div class="-mt-2">
        <time class=" text-md lg:text-xl/none font-medium text-black  dark:text-white ">2019-2020</time>

        <h3 class=" text-3xl lg:text-5xl font-bold text-black-900 dark:text-teal-500">Class Xth</h3>

        <p class="mt-0.5  text-md lg:text-2xl text-black-700  dark:text-white">
          Green Land Convent School,Sec-32 Ludhiana
        </p>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>

  <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span class="size-3 shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500"></span>

      <div class="-mt-2">
        <time class=" text-md lg:text-xl/none font-medium text-black-700  dark:text-white">2021-2022</time>

        <h3 class="text-3xl lg:text-5xl font-bold text-black-900 dark:text-teal-500">Class XIIth</h3>

        <p class="mt-0.5  text-md lg:text-2xl text-black-700  dark:text-white">
          Green Land Convent School,Sec-32 Ludhiana
        </p>
      </div>
    </div>

    <div aria-hidden="true"></div> 
  </li>

  <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
    <div
      class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
    >
      <span class="size-3 shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-teal-500"></span>

      <div class="-mt-2">
        <time class=" text-md lg:text-xl/none font-medium text-black-700  dark:text-white">2022-2026</time>

        <h3 class=" text-3xl lg:text-5xl font-bold text-black-900 dark:text-teal-500">BE-IT</h3>

        <p class="mt-0.5  text-md lg:text-2xl text-black  dark:text-white">
        Bachelor of Technology in Information Technology
        
        </p>
        <h4>Chandigarh University, Punjab</h4>
      </div>
    </div>

    <div aria-hidden="true"></div>
  </li>
</ol>
 );
};
export default Timeline;