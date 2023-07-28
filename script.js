async function foo(){
    try {
        var api=await fetch("https://isro.vercel.app/api/customer_satellites")
        
        const data=await api.json();
        console.log(data);
        // Get an array of keys present in the data object
        // const keys = Object.keys(data);
        // console.log(keys);
        
        var container=document.createElement("div")
        container.setAttribute("class","container")
        
        container.innerHTML=`<h2>Fetch Details From https://isro.vercel.app/api/customer_satellites</h2><br>`;
        document.body.append(container)
    
    data.customer_satellites
    .forEach(i => {
        console.log(i);
        
        var div = document.createElement("div");
        div.style.marginBottom="50px"
        div.innerHTML = `
     <div class="card border-success mb-3 mx-2">
    <div class="card-header bg-transparent border-success text-center fw-bold">Details</div>
    <div class="card-body text-dark" style="background-image: linear-gradient(to right,rgb(134, 210, 245),rgb(123, 156, 240),rgb(117, 213, 241))
    ">
    <h5><span class="text-light fw-4 pe-2">Satelite Id:</span> ${i.id}</h5>
    <h5><span class="text-light fw-4 pe-2">Country:</span> ${i.country}</h5><br>
    <h5><span class="text-light fw-4 pe-2">Lauch Date:</span> ${i.launch_date}</h5><br>
    <h5><span class="text-light fw-4 pe-2">Mass:</span> ${i.mass}</h5><br>
    <h5><span class="text-light fw-4 pe-2">Launcher Name:</span> ${i.launcher}</h5>

    
    
    </div>
    </div>`;
        document.body.append(div);
    });
        
        
    } catch (error) {
        console.log(error);
    }
}
foo()