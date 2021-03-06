# Freshwater Resource Management and Forecast System
IBM Intern Hackathon 2020 - Climate Change
###### Team 54: Nikita Patel, Lorenzo Muranelli, Yash Sardhara, Andi Xiong
---

Many cities throughout the world do not receive an adequate supply of freshwater due to climate change and limited access to freshwater resources [1]. In the US, California has dealt with similar issues influenced by droughts and wildfires [2]. The longest recorded drought in California lasted between 2011 and 2019 [3]. The drought substantially reduced freshwater levels in lakes and reservoirs and dried out vegetation [4]. To remedy the situation, California authorities placed periodic restrictions on its citizens’ freshwater usage, a trend that may continue to occur in the future [5]. In addition, some cities in California have experienced issues regarding water quality, as have many cities throughout the world [6]. As the scarcity of freshwater resources increases due to climate change, it is increasingly important to monitor the quantity and quality of freshwater using past, current, and future data. However, data about the quantity and quality of freshwater is often hard to find, interpret, and aggregate, making it difficult to employ effective solutions to alleviate these problems. Thus, we have created a freshwater resource management and forecast system using IBM Watson Studio applications such as AutoAI that will help authorities and citizens better manage their freshwater quality and consumption. 

To forecast regional demand for potable water, we aggregated public California water distribution data, which included the current water conservation statuses and restrictions of each county, water supplier regions, monthly production, residential/agricultural/industrial allocation of water, population statistics, and the projected amount of water allocated to each resident. This data was then displayed visually on an interactive map that visualizes the current water conservation restrictions of each county. For each county, the severity of water restrictions is displayed, and additional information about each contributing water source and their projected  production levels is displayed upon hover. When selecting a county, users can view the current consumption rate, recommended gallons to allocate per resident, forecast for future freshwater sources, freshwater capacity, and the freshwater quality report that follows the current California conservation ordinance [7]. This data can help authorities better understand specific region and county freshwater needs, as well as allocate and provide freshwater resources to prioritized regions. Making the water conservation restrictions publicly available can enable residents to change their behavior and be mindful about their water consumption in order to reduce wastage.

Though we primarily focused on California as a use-case scenario for the model, our application can potentially be used in any city with relevant freshwater data. Furthermore, as internet-of-things (IoT) devices are made more available throughout the world, our application can assist developing regions in optimizing their water management system by determining freshwater supply, consumption, and quality.

In the future, we aim to add a second component to our system: a household application that provides information of forecasted freshwater data to residents. IBM Watson Assistant will assist a user to plan their ideal freshwater consumption based on the number of individuals in the household and freshwater consuming appliances and activities, which will ultimately help the household change their freshwater consumption behavior, save money, and save water in the long run. We also plan to incorporate local precipitation data to our model to improve accuracy better assist users with their freshwater needs.

[View demo](https://ibm.box.com/s/ps3qebvghlghk3hssfl0vhihnx3ysm38) (internal access only)


###### References:
1. https://www.worldwildlife.org/threats/water-scarcity
2. https://www.nationalgeographic.com/environment/2018/11/climate-change-california-wildfire/
3. https://www.drought.gov/drought/states/california
4. https://ca.water.usgs.gov/california-drought/what-is-drought.html
5. https://www.bbc.com/news/world-us-canada-32151413
6. https://www.ppic.org/publication/californias-water-quality-challenges/
7. https://ylwd.com/community/conservation-ordinance
