﻿using System.Buffers;
using FezileFashionSkillsAcademy.Services;
using FezileFashionSkillsAcademy.Models.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Swagger;
using FezileFashionSkillsAcademy.Services.shared.Helpers;
using FezileFshionSkillsAcademy.Services.Validations.Logins;
using FezileFshionSkillsAcademy.Services.Validations.Emails;

namespace FezileFashionSkillsAcademy
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var environment = Configuration["Configurations:Environment"];
            services.Configure<Configurations>(Configuration.GetSection("Configurations"));
            services.Configure<EnvironmentConfig>(Configuration.GetSection("Configurations:" + environment));
            services.AddDbContext<Entities.Context>(options =>
            options.UseMySQL(Configuration["Configurations:" + environment + ":DbConnection"]));

            // services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddScoped<ILoginsService, LoginsService>();
            services.AddScoped<ILoginsValidation, LoginsValidation>();
            services.AddScoped<ICipherService, CipherService>();
            services.AddScoped<IEmailsService, EmailsService>();
            services.AddScoped<IApplicationsService, ApplicationsService>();
            services.AddScoped<IStudentsService, StudentsService>();
            services.AddScoped<IApplicationHelper, ApplicationHelper>();
            services.AddScoped<IEmailHelper, EmailHelper>();
            services.AddScoped<IEmailsValidation, EmailsValidation>(); 

            services.AddCors();
            services.AddMvc(options =>
            {
                options.OutputFormatters.Clear();
                options.OutputFormatters.Add(new JsonOutputFormatter(new JsonSerializerSettings()
                {
                    //ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                }, ArrayPool<char>.Shared));
            });

            services.AddSwaggerGen(c =>
            {
                c.CustomSchemaIds(x => x.FullName);
                c.SwaggerDoc("v1", new Info
                {
                    Version = "1.0.0",
                    Title = "FezileFashionSkillsAcademy API",
                    Description = "FezileFashionSkillsAcademy ASP.NET Core Web API",
                    TermsOfService = "None",
                    Contact = new Contact() { Name = "Talking Dotnet", Email = "contact@talkingdotnet.com", Url = "www.talkingdotnet.com" }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseCors(
                options => options.WithOrigins(
                    "https://targetonline-api.tk:5206",
                    "http://18.221.169.195:5206", 
                    "http://localhost:5206", 
                    "http://localhost:3002",
                    "http://ffsaza.co.za",
                    "http://www.ffsaza.co.za",
                    "https://ffsaza.co.za",
                    "https://www.ffsaza.co.za"
                ).AllowAnyHeader()
                 .AllowAnyMethod()
            );
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "FezileFashionSkillsAcademy API 1.0.0");
            });
        }
    }
}
