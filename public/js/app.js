
        var vm = new Vue(
            {

                el: '#app',
                data:{
                    
                    projects:[{id:1,ps:'大作业',priority:2,class1:false,belong:1},
							{id:2,ps:'期末考试',priority:3,class1:false,belong:0},
							{id:3,ps:'期末考试',priority:3,class1:false,belong:1},
							{id:4,ps:'大作业',priority:2,class1:false,belong:0}
							
							],
					ok:[ ],
					newProject:{id:0,name:'',time:'',level:'低',ps:''},

					pagesize:10,
					curpage:1
                },
				created:function(){
					this.pageCount=Math.ceil(this.projects.length/this.pagesize);
				},
					methods:{
                    createproject:function()
					{
						if(IsDate(this.newProject.time)){
						if(this.newProject.id===0)
						{
						this.newProject.id=this.projects.length+1;
                        this.projects.push(this.newProject);
						if(this.projects.length%10==1)
						{
                            this.pageCount=this.pageCount+1;
							
						}
						}
							
						}
                         this.newProject={id:0,name:'',time:"",level:'',ps:''};
					},
                    deleteProject:function(id)
					{
                        this.projects.splice(id,1);
						if(this.projects.length%10==0)
						{
							this.pageCount=this.pageCount-1;

						}
                    },
					changeProject:function(project)
					{
						this.newProject=project;
					},
                    finishProject:function(id,pro)
					{
					    
						this.ok.push(this.pro);
						this.projects.splice(id,1);
						if(this.projects.length%10==0)
						{
							this.pageCount=this.pageCount-1;

						}
						windows.location.href="ok.html"
						
						
						
					
				    },
					deleteOk:function(id){
						this.ok.splice(id,1);
					},
					




					
					
                prePage:function(event){
                    if(this.curpage>1)
                    {
                        this.curpage=this.curpage-1;
                    }
                        
                },
                nextPage:function(event){
                    if(this.curpage<this.pageCount)
                    {
                        this.curpage=this.curpage+1;
                    }
                },
				numPage:function(num,event){
					if(this.curpage==num)
					{	return;	}
					this.curpage=num;
				},

                }
            
			}
        )