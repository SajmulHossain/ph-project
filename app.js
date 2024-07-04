function form(x) {
    
    const name = x.target.name.value;
    const email = x.target.email.value;
    const message = x.target.message.value;

    const successMsg = document.getElementById('success');
    
    const para = document.createElement('p');
    para.innerText = `Your name is ${name}.`;
    
    const emailPara = document.createElement('p');
    emailPara.innerText = `Your email : ${email}`;
    
    const msgPara = document.createElement('p');
    msgPara.innerText = `Your message : ${message}.`;
    
    successMsg.appendChild(para);
    successMsg.appendChild(emailPara);
    successMsg.appendChild(msgPara);

    return false;
    }


    const imgArray = [

        {
            url: "image/image 1.png"
        },

        
        {
            url: "image/image 2.png"
        },

        
        {
            url: "image/image 3.png"
        },

        
        {
            url: "image/image 4.png"
        }

    ];

    function project() {
        const project = document.getElementById('project');

        const div = document.createElement('div');

        for (const x of imgArray) {
            
            const divImg = document.createElement('div');
            divImg.classList.add('project-file');
            divImg.innerHTML = `
            <img src="${x.url}" alt="">
            `
            project.appendChild(divImg);
            

        }

        
        
    }