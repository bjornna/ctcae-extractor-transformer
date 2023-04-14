# CTCAE - terminology load and transform 

## What is it? 
This is a quick and dirty application to read CTCAE terms from Excel and output resources to be used within openEHR based applications. The purpose is to extract the connection between categories, terms and grade inclusions. 



## How to run? 

- Require Deno https://deno.land/manual@v1.32.3/getting_started/installation 

```sh 
deno run src/main.ts
```

Files will be written to "output": 


## Data 
The CTCAE terminology is extracted from the following Excel spradsheet: https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/CTCAE_v5.0_2017-11-27.xlsx 

In the following there are some text about CTCAE to introduce the terminology and the overall model/terminology. 

### Common Terminology Criteria for Adverse Events (CTCAE)
The NCI Common Terminology Criteria for Adverse Events is a descriptive terminology which can be utilized for Adverse Event (AE) reporting. A grading (severity) scale is provided for each AE term. 

#### SOC 
System Organ Class (SOC), the highest level of the MedDRA1 hierarchy, is identified by anatomical or physiological system, etiology, or purpose (e.g., SOC Investigations for laboratory test results). CTCAE terms are grouped by MedDRA Primary SOCs. Within each SOC, AEs are listed and accompanied by descriptions of severity (Grade).



#### CTCAE Terms
An Adverse Event (AE) is any unfavorable and unintended sign (including an abnormal laboratory finding), symptom, or disease temporally associated with the use of a medical treatment or procedure that may or may not be considered related to the medical treatment or procedure. An AE is a term that is a unique representation of a specific event used for medical documentation and scientific analyses. Each CTCAE v4.0 term is a MedDRA LLT (Lowest Level Term).

#### Grades
Grade refers to the severity of the AE. The CTCAE displays Grades 1 through 5 with unique clinical descriptions of severity for each AE based on this general guideline:

- **Grade 1 Mild**; asymptomatic or mild symptoms; clinical or diagnostic observations only; intervention not indicated.
- **Grade 2 Moderate**; minimal, local or noninvasive intervention indicated; limiting ageappropriate instrumental ADL*.
- **Grade 3 Severe** or medically significant but not immediately  life-threatening;hospitalization or prolongation of hospitalization indicated; disabling; limiting self care ADL**.
- **Grade 4 Life-threatening** consequences; urgent intervention indicated.
- **Grade 5 Death** related to AE. 

