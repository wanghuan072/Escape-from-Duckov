<template>
    <div class="quests-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape From Duckov - All Quests</h1>
                <p class="page-subtitle">Quest checklist for Duckov with requirements & objectives maps!</p>
            </div>

            <div class="table-container">
                <table class="quests-table">
                    <thead>
                        <tr>
                            <th class="quest-name-col">Quest Name</th>
                            <th class="info-col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="quest in questsData" :key="quest.name">
                            <td class="quest-name-cell">{{ quest.name }}</td>
                            <td class="info-cell">{{ quest.info }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
const questsData = [
    {
        name: 'Balanced Nutrition I',
        info: 'Quest Giver: Mud\nMap: Any\n\nObjectives:\n• Submit: Duck Egg x1\n\nRewards:\n• 800 EXP\n• 500 Currency'
    },
    {
        name: 'Startup Capital',
        info: 'Quest Giver: Jeff\nMap: Ground Zero\n\nObjectives:\n• Kill Any Enemy\n• Extract from Ground Zero\n\nRewards:\n• 500 EXP\n• 1,296 Currency'
    },
    {
        name: "Hunter's Path",
        info: 'Quest Giver: Jeff\nRequirements: Complete Startup Capital\nMap: Any\n\nObjectives:\n• Kill Rampaging Scavenger\n• Submit: Butcher Knife x2\n\nRewards:\n• 1,500 EXP\n• 380 Currency\n• Metal Plate x2\n• Nut x1\n• Bolt x1'
    },
    {
        name: 'Basic Construction',
        info: 'Quest Giver: Jeff\nMap: Bunker\n\nObjectives:\n• Build Workbench\n\nRewards:\n• 1,000 EXP\n• 500 Currency\n• Bandage x3'
    },
    {
        name: 'Expanded Pocket',
        info: 'Quest Giver: Jeff\nRequirements: Complete Hunter\'s Path\nMap: Bunker\n\nObjectives:\n• Unlock: Backpack Expert I\n\nRewards:\n• 500 EXP\n• 500 Currency'
    },
    {
        name: 'Aim for the Head',
        info: 'Quest Giver: Jeff\nRequirements: Complete Hunter\'s Path\nMap: Ground Zero\n\nObjectives:\n• Kill Any Enemy x5\n• Headshots required.\n\nRewards:\n• 2,000 EXP\n• 500 Currency\n• Tire x1\n• Laser (Basic) x1'
    },
    {
        name: 'Full of Love',
        info: 'Quest Giver: Jeff\nRequirements: Complete Expanded Pocket\nMap: Any\n\nObjectives:\n• Submit 1888 Currency\n\nRewards:\n• 500 EXP\n• Permanent Donation Box Spawn with Food'
    },
    {
        name: 'Balanced Nutrition II',
        info: 'Quest Giver: Mud\nRequirements: Complete Balanced Nutrition I\nMap: Any\n\nObjectives:\n• Submit: Soda Crackers x1\n\nRewards:\n• 800 EXP\n• 500 Currency'
    },
    {
        name: 'Balanced Nutrition III',
        info: 'Quest Giver: Mud\nRequirements: Complete Balanced Nutrition II\nMap: Any\n\nObjectives:\n• Submit: Red-Band Cigarette x1\n\nRewards:\n• 800 EXP\n• 500 Currency'
    },
    {
        name: 'Fitness Coach',
        info: 'Quest Giver: Mud\nRequirements: Complete Balanced Nutrition III\nMap: Bunker\n\nObjectives:\n• Build Gym\n\nRewards:\n• 500 EXP\n• 500 Currency'
    },
    {
        name: 'The Importance of Bleeding Control',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction\nMap: Any\n\nObjectives:\n• Use Bandage\n\nRewards:\n• 500 EXP\n• 150 Currency\n• Pile of Medicine x1\n• Unlock Item: Aspirin'
    },
    {
        name: 'Signal Tower',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction\nMap: Ground Zero\n\nRequired Items:\n• Flathead Screwdriver\n\nObjectives:\n• Fix the northern signal tower.\n\nRewards:\n• 1,500 EXP\n• 450 Currency'
    },
    {
        name: 'Letter from an Old Friend',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction\nMap: Ground Zero\n\nObjectives:\n• Submit: Letter from an Old Friend\n\nRewards:\n• 1,500 EXP\n• 450 Currency'
    },
    {
        name: 'Basic Construction (Medical)',
        info: 'Quest Giver: Jeff\nRequirements: Complete The Importance of Bleeding Control\nMap: Bunker\n\nObjectives:\n• Build Medic Station\n\nRewards:\n• 1,000 EXP\n• 500 Currency'
    },
    {
        name: 'Basic Construction III',
        info: 'Quest Giver: Jeff\nRequirements: Complete Letter from an Old Friend\nMap: Bunker\n\nObjectives:\n• Build Armor Shop\n\nRewards:\n• 1,500 EXP\n• 650 Currency'
    },
    {
        name: 'Generic Pistol',
        info: 'Quest Giver: Jeff\nRequirements: Complete Aim for the Head\nMap: Any\n\nObjectives:\n• Submit: PM x1\n\nRewards:\n• 1,500 EXP\n• 300 Currency\n• Unlock Item: PM'
    },
    {
        name: 'Medical Assistance',
        info: 'Quest Giver: Mud\nRequirements: Build the Gym\nMap: Any\n\nObjectives:\n• Submit: Honey x2\n• Submit: IV Medicine x2\n• Submit: Toilet Cleaner x2\n\nRewards:\n• 1,800 EXP\n• 2,000 Currency\n• Yellow Injector x2\n• Weight-Bearing Injector x2'
    },
    {
        name: 'Professional Chef',
        info: 'Quest Giver: Mud\nRequirements: Build the Gym\nMap: Any\n\nObjectives:\n• Submit 1500 Currency\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Strange Feather',
        info: 'Quest Giver: Jeff\nRequirements: Complete Generic Pistol\nMap: Any\n\nObjectives:\n• Submit: Fading Feather x4\n\nRewards:\n• 1,000 EXP\n• 750 Currency\n• Totem: Ninja I x1'
    },
    {
        name: 'Supply Route',
        info: 'Quest Giver: Orange\nRequirements: Build the Armor Shop\nMap: Ground Zero\n\nRequired Items:\n• Marker x1\n\nObjectives:\n• Mark the supply box.\n\nRewards:\n• 1,200 EXP\n• 600 Currency\n• Lv. 3 Body Armor x1\n• SWAT Helmet x1'
    },
    {
        name: 'Bookkeeping',
        info: 'Quest Giver: Orange\nRequirements: Build the Armor Shop\nMap: Any\n\nObjectives:\n• Submit Ink x1\n• Submit Pen x1\n• Submit Notebook x1\n\nRewards:\n• 2,000 EXP\n• 1,600 Currency'
    },
    {
        name: 'Self-Sufficient',
        info: 'Quest Giver: Mud\nRequirements: Build the Gym\nMap: Any\n\nObjectives:\n• Submit: UV Light x3\n\nRewards:\n• 1,200 EXP\n• 600 Currency\n• Painkiller x2'
    },
    {
        name: 'Basic Construction V',
        info: 'Quest Giver: Mud\nRequirements: Complete Professional Chef\nMap: Bunker\n\nObjectives:\n• Build Kitchen\n\nRewards:\n• 1,000 EXP\n• 500 Currency'
    },
    {
        name: 'Basic Construction II',
        info: 'Quest Giver: Jeff\nRequirements: Complete Signal Tower\nMap: Bunker\n\nObjectives:\n• Build Weapon Shop\n\nRewards:\n• 1,000 EXP\n• 550 Currency'
    },
    {
        name: 'Upgrade Workbench',
        info: 'Quest Giver: Jeff\nRequirements: Complete Signal Tower\nMap: Bunker\n\nObjectives:\n• Unlock: Advanced Processing\n\nRewards:\n• 1,000 EXP\n• 500 Currency\n• Weapon Parts x3'
    },
    {
        name: 'Tech Expert',
        info: 'Quest Giver: Jeff\nRequirements: Complete Signal Tower\nMap: Ground Zero\n\nObjectives:\n• Submit: Pile of Electronic Components\n\nRewards:\n• 1,500 EXP\n• 500 Currency'
    },
    {
        name: 'Crafting Apprenticeship',
        info: 'Quest Giver: Jeff\nRequirements: Complete Upgrade Workbench\nMap: Any\n\nObjectives:\n• Submit: Glick x1\n\nRewards:\n• 2,000 EXP\n• 500 Currency\n• Notebook x1'
    },
    {
        name: 'Basic Construction IV',
        info: 'Quest Giver: Jeff\nRequirements: Complete Tech Expert\nMap: Bunker\n\nObjectives:\n• Build Teleporter\n\nRewards:\n• 1,000 EXP\n• 500 Currency'
    },
    {
        name: 'Cut Off My Profits',
        info: 'Quest Giver: Orange\nRequirements: Complete Supply Route\nMap: Ground Zero\n\nObjectives:\n• Kill Scavenger x5\n• Headshots required.\n• Kill Rampaging Scavenger x3\n• Headshots required.\n\nRewards:\n• 1,500 EXP\n• 700 Currency\n• Tire x1'
    },
    {
        name: 'Water Resources',
        info: 'Quest Giver: Orange\nRequirements: Complete Cut Off My Profits\nMap: Warehouse Area\n\nObjectives:\n• Stash the bottled water at the marked spot.\n• Stash the bottled water at the marked spot.\n• Stash the bottled water at the marked spot.\n\nRewards:\n• 1,800 EXP\n• 1,000 Currency\n• Unlock Item: Tactical Flashlight'
    },
    {
        name: 'Large Storage',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction II\nMap: Bunker\n\nObjectives:\n• Unlock: Storage Expansion Lv. 1\n\nRewards:\n• 1,000 EXP\n• 2,000 Currency\n• R6 Battery x3'
    },
    {
        name: 'Mosquito Elimination',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction II\nMap: Any\n\nObjectives:\n• Submit: Gunpowder x30\n\nRewards:\n• 800 EXP\n• 500 Currency\n• Ink x1'
    },
    {
        name: 'Parts Wholesale',
        info: 'Quest Giver: Xavier\nRequirements: Build the Weapons Shop\nMap: Any\n\nObjectives:\n• Submit: Weapon Parts x5\n• Submit: Intermediate Weapon Parts x2\n\nRewards:\n• 1,000 EXP\n• 1,000 Currency\n• Unlock Item: AK-74U'
    },
    {
        name: 'Performance Test',
        info: 'Quest Giver: Xavier\nRequirements: Complete Parts Wholesale\nMap: Any\n\nObjectives:\n• Kill Any Enemy x8\n• Use Weapon: AK-74U\n\nRewards:\n• 1,500 EXP\n• 1,200 Currency\n• Notebook'
    },
    {
        name: 'Punisher',
        info: 'Quest Giver: Xavier\nRequirements: Complete Parts Wholesale\nMap: Ground Zero\n\nObjectives:\n• Kill Mercenary x3\n• Location: Ground Zero\n\nRewards:\n• 2,000 EXP\n• 1,500 Currency\n• Unlock Item: Laser (Rapid Response)'
    },
    {
        name: 'Duck Hunt: Pato Chap',
        info: 'Quest Giver: Xavier\nRequirements: Complete Punisher\nMap: Ground Zero\n\nObjectives:\n• Kill Pato Chapo\n• Location: Ground Zero\n\nRewards:\n• 2,500 EXP\n• 2,000 Currency\n• Unlock Item: SKS-45'
    },
    {
        name: 'Unlock Beacon I',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction IV\nMap: Ground Zero\n\nObjectives:\n• Unlock Ground Zero Beacon\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Unlock Beacon II',
        info: 'Quest Giver: Jeff\nRequirements: Complete Unlock Beacon I\nMap: Warehouse Area\n\nObjectives:\n• Unlock Warehouse Area Beacon\n\nRewards:\n• 2,000 EXP'
    },
    {
        name: 'Explore Warehouse Area',
        info: 'Quest Giver: Jeff\nRequirements: Complete Unlock Beacon I\nMap: Warehouse Area\n\nObjectives:\n• Extract from Warehouse Area\n\nRewards:\n• 1,500 EXP\n• 1,500 Currency'
    },
    {
        name: 'Bronze Pocket Watch',
        info: 'Quest Giver: Xavier\nRequirements: Complete Performance Test\nMap: Ground Zero\n\nRequired Items:\n• Mechanical Key\n\nObjectives:\n• Submit: Pocket Watch\n\nRewards:\n• 1,000 EXP\n• 1,000 Currency'
    },
    {
        name: 'Cargo List',
        info: 'Quest Giver: Xavier\nRequirements: Complete Bronze Pocket Watch\nMap: Ground Zero\n\nObjectives:\n• Submit: Cargo List x1\n\nRewards:\n• 1,500 EXP\n• 500 Currency\n• Pen'
    },
    {
        name: 'Medical Supplies',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction (Medical)\nMap: Any\n\nObjectives:\n• Submit First Aid Kit (S) x3\n\nRewards:\n• 1,000 EXP\n• 550 Currency\n• First Aid Kit (S) x2\n• Unlock Item: First Aid Kit (S)'
    },
    {
        name: 'Generic Medicine',
        info: 'Quest Giver: Jeff\nRequirements: Complete Basic Construction (Medical)\nMap: Bunker\n\nObjectives:\n• Submit Pile of Medicine x3\n\nRewards:\n• 800 EXP\n• 500 Currency'
    },
    {
        name: 'Punisher II',
        info: 'Quest Giver: Xavier\nRequirements: Complete Cargo List\nMap: Ground Zero\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: VPO-136\n• Location: Ground Zero\n• Kill Mercenary x3\n• Use Weapon: MP-155\n• Location: Ground Zero\n\nRewards:\n• 2,500 EXP\n• 3,000 Currency'
    },
    {
        name: 'Fishing Enthusiast',
        info: 'Quest Giver: Vogo\nRequirements: Build the Kitchen\nMap: Ground Zero\n\nObjectives:\n• Reach the quest location.\n• Reach the quest location.\n\nRewards:\n• 1,200 EXP\n• 1,000 Currency\n• Flashlight x1\n• Unlock Item: Flashlight'
    },
    {
        name: 'Upgrade Fishing Rod',
        info: 'Quest Giver: Vogo\nRequirements: Complete Fishing Enthusiast\nMap: Any\n\nObjectives:\n• Submit: Organic Fiber x3\n• Submit: Tape x1\n\nRewards:\n• 1,000 EXP\n• 2,000 Currency'
    },
    {
        name: 'Fishing Novice',
        info: 'Quest Giver: Vogo\nRequirements: Complete Fishing Enthusiast\nMap: Any\n\nObjectives:\n• Submit: Brown Sardine x1\n\nRewards:\n• 1,000 EXP\n• 1,500 Currency'
    },
    {
        name: 'Power Supply Maintenance',
        info: 'Quest Giver: Jeff\nRequirements: Complete Explore Warehouse Area\nMap: Warehouse Area\n\nObjectives:\n• Fix the safehouse power supply in the Warehouse Area.\n\nRewards:\n• 2,000 EXP\n• 1,300 Currency'
    },
    {
        name: 'Fishing Enthusiast II',
        info: 'Quest Giver: Vogo\nRequirements: Complete Explore Warehouse Area\nMap: Warehouse Area\n\nObjectives:\n• Reach the quest location.\n\nRewards:\n• 1,500 EXP\n• 1,500 Currency\n• Gas Mask x2\n• Travel Bag'
    },
    {
        name: 'Tasty Secret',
        info: 'Quest Giver: Mud\nRequirements: Complete Explore Warehouse Area\nMap: Warehouse Area\n\nObjectives:\n• Collect samples from the water tower in the Lumber Mill.\n\nRewards:\n• 1,500 EXP\n• 1,500 Currency\n• Painkiller x2\n• Cola x3'
    },
    {
        name: 'Homemade Candy',
        info: 'Quest Giver: Mud\nRequirements: Complete Explore Warehouse Area\nMap: Any\n\nObjectives:\n• Submit: Homemade Candy x1\n\nRewards:\n• 500 EXP\n• 500 Currency\n• Unlock Item: Homemade Candy'
    },
    {
        name: 'New Cargo',
        info: 'Quest Giver: Xavier\nRequirements: Complete Cargo List\nMap: Warehouse Area\n\nObjectives:\n• Mark cargo container 1.\n• Mark cargo container 2.\n\nRewards:\n• 1,800 EXP\n• 1,000 Currency\n• Unlock Item: AK-47\n• Unlock Item: Standard Bullet (L)\n• Unlock Item: Control Stock'
    },
    {
        name: 'Seclusion',
        info: 'Quest Giver: Orange\nRequirements: Complete Bookkeeping\nMap: Warehouse Area\n\nObjectives:\n• Submit: Letter from the Hermit\n\nRewards:\n• 2,000 EXP\n• 800 Currency\n• Unlock Item: Lv. 3 Body Armor\n• Unlock Item: SWAT Helmet'
    },
    {
        name: 'Worker Efficiency',
        info: 'Quest Giver: Mud\nRequirements: Complete Tasty Secret\nMap: Any\n\nObjectives:\n• Submit: Bleach x1\n• Submit: Super Glue A x1\n• Submit Cola x2\n\nRewards:\n• 2,000 EXP\n• 2,000 Currency\n• Weight-Bearing Injector x2\n• Unlock Item: Weight-Bearing Injector'
    },
    {
        name: 'Coming from the West',
        info: 'Quest Giver: Xavier\nRequirements: Complete New Cargo\nMap: Warehouse Area\n\nObjectives:\n• Kill Mercenary x5\n• Use Weapon: AK-47\n• Location: Warehouse Area\n• Submit: Dog Tag x2\n\nRewards:\n• 2,200 EXP\n• 1,500 Currency'
    },
    {
        name: 'Leisure Time',
        info: 'Quest Giver: Vogo\nRequirements: Complete Fishing Enthusiast II\nMap: Any\n\nObjectives:\n• Submit: Newspaper x1\n\nRewards:\n• 1,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'Warehouse Route',
        info: 'Quest Giver: Jeff\nRequirements: Complete Power Supply Maintenance\nMap: Warehouse Area\n\nObjectives:\n• Reach the quest location.\n• Reach the quest location.\n• Reach the quest location.\n\nRewards:\n• 2,500 EXP\n• 1,500 Currency\n• Unlock Item: First Aid Kit'
    },
    {
        name: 'Weapon Blueprint',
        info: 'Quest Giver: Jeff\nRequirements: Complete Power Supply Maintenance\nMap: Warehouse Area\n\nObjectives:\n• Submit: MF Blueprint Fragment 1 x1\n• Submit: MF Blueprint Fragment 2 x1\n• Submit: MF Blueprint Fragment 3 x1\n\nRewards:\n• 2,800 EXP\n• 1,400 Currency\n• Blueprint: MF x1\n• Unlock Item: Blueprint: MF'
    },
    {
        name: 'Hidden Secret',
        info: 'Quest Giver: Xavier\nRequirements: Complete Power Supply Maintenance\nMap: Warehouse Area\n\nObjectives:\n• Reach the quest location.\n• Reach the quest location.\n\nRewards:\n• 1,500 EXP\n• 1,000 Currency'
    },
    {
        name: 'Multi-Talented',
        info: 'Quest Giver: Xavier\nRequirements: Complete Hidden Secret\nMap: Any\n\nObjectives:\n• Submit: Tambourine x1\n• Submit: Xylophone x1\n\nRewards:\n• 2,000 EXP\n• 500 Currency\n• Unlock Item: AP Bullet (MAG)'
    },
    {
        name: 'Unlock Beacon III',
        info: 'Quest Giver: Jeff\nRequirements: Complete Warehouse Route\nMap: Farm Town\n\nObjectives:\n• Unlock Farm Town Beacon\n\nRewards:\n• 3,000 EXP\n• 1,000 Currency\n• Homemade Candy x1'
    },
    {
        name: 'Explore Farm Town',
        info: 'Quest Giver: Jeff\nRequirements: Complete Warehouse Route\nMap: Farm Town\n\nObjectives:\n• Extract from Farm Town\n\nRewards:\n• 2,500 EXP\n• 1,500 Currency\n• Unlock Item: Tactical Knife Kit\n• Unlock Item: Recipe: Tactical Knife Kit'
    },
    {
        name: 'Weapon Test I',
        info: 'Quest Giver: Jeff\nRequirements: Complete Weapon Blueprint\nMap: Ground Zero\n\nObjectives:\n• Kill Mercenary x5\n• Use Weapon: MF\n• Kill Pato Chapo\n• Use Weapon: MF\n\nRewards:\n• 3,750 EXP\n• 3,000 Currency\n• Super Glue B x2'
    },
    {
        name: 'Sniper Trial',
        info: 'Quest Giver: Orange\nRequirements: Complete Warehouse Route\nMap: Warehouse Area\n\nObjectives:\n• Kill Mercenary x6\n• Location: Warehouse Area\n• Headshots required.\n\nRewards:\n• 2,000 EXP\n• 2,000 Currency\n• Super Glue B x2\n• Unlock Item: Standard Sniper Bullet'
    },
    {
        name: 'Trainee Courier',
        info: 'Quest Giver: Orange\nRequirements: Complete Warehouse Route\nMap: Warehouse Area\n\nObjectives:\n• Secure the package and complete the delivery.\n• Kill Any Enemy x3\n\nRewards:\n• 2,500 EXP\n• 600 Currency'
    },
    {
        name: 'Life Support System',
        info: 'Quest Giver: Xiaoming\nRequirements: Build the Tech Center\nMap: Warehouse Area\n\nObjectives:\n• Submit: Electrified MP7 x1\n\nRewards:\n• 2,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'Interstellar Navigation',
        info: 'Quest Giver: Xiaoming\nRequirements: Build the Tech Center\nMap: Ground Zero\n\nObjectives:\n• Submit: Navigation System Blueprint x1\n\nRewards:\n• 2,500 EXP\n• 2,500 Currency'
    },
    {
        name: 'Packaging Materials',
        info: 'Quest Giver: Orange\nRequirements: Complete Trainee Courier\nMap: Any\n\nObjectives:\n• Submit: Cardboard Box x2\n• Submit: Tape x2\n• Submit: Scissors x1\n\nRewards:\n• 1,000 EXP\n• 2,500 Currency\n• Yellow Injector x2\n• Weight-Bearing Injector x2\n• Unlock Item: Cardboard Box'
    },
    {
        name: 'Sniper Certification I',
        info: 'Quest Giver: Orange\nRequirements: Complete Sniper Trial\nMap: Any\n\nObjectives:\n• Kill Mercenary x10\n• Use Weapon: Glick\n• Headshots required.\n\nRewards:\n• 2,200 EXP\n• 2,200 Currency'
    },
    {
        name: 'Sniper Certification II',
        info: 'Quest Giver: Orange\nRequirements: Complete Sniper Trial\nMap: Ground Zero\n\nObjectives:\n• Kill Pato Chapo x2\n• Use Weapon: SKS-45\n• Location: Ground Zero\n• Headshots required.\n\nRewards:\n• 2,200 EXP\n• 2,200 Currency'
    },
    {
        name: 'Marking Life Support Pods',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Life Support System\nMap: Warehouse Area\n\nObjectives:\n• Submit: Life Support System Clue x1\n\nRewards:\n• 2,500 EXP\n• 3,000 Currency'
    },
    {
        name: 'Logistics Support',
        info: 'Quest Giver: Xavier\nRequirements: Complete Coming from the West\nMap: Any\n\nObjectives:\n• Submit: Metal Fuel Drum x1\n• Submit: Basket x3\n\nRewards:\n• 2,000 EXP\n• 1,000 Currency\n• Unlock Item: Balanced Stock II\n• Unlock Item: 2x Scope'
    },
    {
        name: 'A Cup of Tea and a Smoke',
        info: 'Quest Giver: Vogo\nRequirements: Complete Leisure Time\nMap: Any\n\nObjectives:\n• Submit: Cup x1\n• Submit: Red-Band Cigarette x1\n\nRewards:\n• 1,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'Mark Life Support Pods',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Marking Life Support Pods\nMap: Warehouse Area\n\nObjectives:\n• Use the Marker to tag Life Support Pod 1.\n• Use the Marker to tag Life Support Pod 2.\n• Use the Marker to tag Life Support Pod 3.\n• Use the Marker to tag Life Support Pod 4.\n\nRewards:\n• 3,800 EXP\n• 10,000 Currency'
    },
    {
        name: 'Navigation System',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Interstellar Navigation\nMap: J-Lab\n\nObjectives:\n• Submit: J-Lab Floppy Disk x1\n• Submit: Compass x1\n• Submit: Radio x1\n\nRewards:\n• 3,000 EXP\n• 4,500 Currency'
    },
    {
        name: 'Official Sniper',
        info: 'Quest Giver: Orange\nRequirements: Complete Sniper Certification I and Sniper Certification II\nMap: Warehouse Area\n\nObjectives:\n• Kill Lordon x1\n• Use Weapon: StG 77\n• Location: Warehouse Area\n• Headshots required.\n• Submit: VPO (Lordon Mod) x1\n\nRewards:\n• 2,500 EXP\n• 2,500 Currency\n• VPO (Lordon Mod) x1\n• Unlock Item: AP Sniper Bullet'
    },
    {
        name: 'Drug Experiment',
        info: 'Quest Giver: Mud\nRequirements: Complete Medical Assistance\nMap: Any\n\nObjectives:\n• Use Melee Injector x1\n• Kill Scavenger x5\n• Use Weapon: Wooden Stick\n• While Strength is active\n\nRewards:\n• 1,800 EXP\n• 500 Currency\n• Hardening Injector x2\n• Unlock Item: Hardening Injector'
    },
    {
        name: 'Repair Life Support Pods',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Mark Life Support Pods\nMap: Any\n\nObjectives:\n• Submit: LEDX Skin Transilluminator x1\n• Submit: First Aid Kit (L) x2\n• Submit: Propane x2\n• Submit: IV Medicine x4\n\nRewards:\n• 1,000 EXP\n• 4,000 Currency'
    },
    {
        name: 'Melee Challenge',
        info: 'Quest Giver: Mud\nRequirements: Complete Drug Experiment\nMap: Warehouse Area\n\nObjectives:\n• Kill Mercenary x1\n• Use Weapon: Wooden Stick\n• Location: Warehouse Area\n\nRewards:\n• 1,800 EXP\n• 1,500 Currency'
    },
    {
        name: 'Specific Medicine I',
        info: 'Quest Giver: Mud\nRequirements: Complete Drug Experiment\nMap: Ground Zero\n\nObjectives:\n• Submit: Specific Leg Pain Medicine x1\n\nRewards:\n• 1,500 EXP\n• 1,200 Currency'
    },
    {
        name: 'Stalking Stranger',
        info: 'Quest Giver: Jeff\nRequirements: Complete Weapon Test I\nMap: Warehouse Area\n\nObjectives:\n• Kill Lordon x1\n• Use Weapon: MF\n• Location: Warehouse Area\n\nRewards:\n• 3,000 EXP\n• 2,000 Currency\n• Unlock Item: Sniper Rifle Suppressor\n• Unlock Item: Sniper Rifle Muzzle Brake (Balanced A)'
    },
    {
        name: 'Extract Fuel',
        info: 'Quest Giver: Jeff\nRequirements: Complete Weapon Test I\nMap: Warehouse Area\n\nObjectives:\n• Extract Fuel from Tank Truck 1\n• Extract Fuel from Tank Truck 2\n• Extract Fuel from Tank Truck 3\n• Extract Fuel from Tank Truck 4\n\nRewards:\n• 3,000 EXP\n• 4,000 Currency\n• Unlock Item: AP Bullet (AR)'
    },
    {
        name: 'Body Training',
        info: 'Quest Giver: Mud\nRequirements: Complete Melee Challenge\nMap: Bunker\n\nObjectives:\n• Unlock: Farmer\'s Walk\n\nRewards:\n• 1,500 EXP\n• 1,000 Currency\n• Yellow Injector x1\n• Unlock Item: Yellow Injector'
    },
    {
        name: 'Official Courier',
        info: 'Quest Giver: Orange\nRequirements: Complete Official Sniper\nMap: Warehouse Area\n\nObjectives:\n• Secure the package and complete the delivery.\n• Kill Any Enemy x4\n\nRewards:\n• 3,000 EXP\n• 800 Currency'
    },
    {
        name: 'Computing Hub',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Stalking Stranger\nMap: Any\n\nObjectives:\n• Submit: Potato Graphics Card x1\n• Submit: Circuit Board x1\n• Submit: Electronic Parts x3\n• Submit: Power Cord x1\n\nRewards:\n• 2,500 EXP\n• 5,000 Currency'
    },
    {
        name: 'Specific Medicine II',
        info: 'Quest Giver: Mud\nRequirements: Complete Specific Medicine I\nMap: Warehouse Area\n\nObjectives:\n• Submit: Specific Hand Pain Medicine x1\n\nRewards:\n• 1,800 EXP\n• 1,500 Currency\n• Unlock Item: Electric RES Injector'
    },
    {
        name: 'Proof of Strength I',
        info: 'Quest Giver: Orange\nRequirements: Complete Official Sniper\nMap: Warehouse Area\n\nObjectives:\n• Kill Speed Group Commander x1\n• Use Weapon: VPO (Lordon Mod)\n• Location: Warehouse Area\n• Headshots required.\n• Kill Speedy Group Member x2\n• Use Weapon: VPO (Lordon Mod)\n• Location: Warehouse Area\n• Headshots required.\n• Submit: Electrified MP7 x1\n\nRewards:\n• 3,000 EXP\n• 3,500 Currency\n• Electrified MP7 x1\n• Unlock Item: M700'
    },
    {
        name: 'Toy Collector I',
        info: 'Quest Giver: Orange\nRequirements: Complete Official Courier\nMap: Any\n\nObjectives:\n• Submit: Toy Rocket x1\n\nRewards:\n• 2,800 EXP\n• 1,500 Currency\n• Unlock Item: Standard Bullet (MAG)'
    },
    {
        name: 'Storm Resistance',
        info: 'Quest Giver: Mud\nRequirements: Complete Specific Medicine II\nMap: Any\n\nObjectives:\n• Kill Spider-Bot x3\n• Submit: Computing Core x3\n• Submit: Cold Core Fragment x3\n\nRewards:\n• 3,000 EXP\n• 2,000 Currency\n• Weak Space Storm Protection Injector x2\n• Unlock Item: Weak Space Storm Protection Injector'
    },
    {
        name: 'Walking Delicacy',
        info: 'Quest Giver: Mud\nRequirements: Complete Specific Medicine II\nMap: Any\n\nObjectives:\n• Submit: Mushroom x3\n\nRewards:\n• 2,000 EXP\n• 500 Currency\n• Weak Space Storm Protection Injector x2\n• Super Glue A x2'
    },
    {
        name: 'All-Rounder',
        info: 'Quest Giver: Jeff\nRequirements: Unlock all talents\nMap: Bunker\n\nObjectives:\n• Submit: Metal Plate x10\n• Submit: Trophy x1\n\nRewards:\n• 3,000 EXP\n• 4,000 Currency'
    },
    {
        name: 'Collect Samples in Space Storm',
        info: 'Quest Giver: Xiaoming\nRequirements: Head into the storm for the first time\nMap: Farm Town\n\nObjectives:\n• Collect samples using the Plastic Barrel at the hilltop.\n\nRewards:\n• 4,000 EXP\n• 4,000 Currency'
    },
    {
        name: 'Special Toilet Cleaner',
        info: 'Quest Giver: Jeff\nRequirements: Complete Explore Farm Town\nMap: Farm Town\n\nObjectives:\n• Reach the quest location.\n• Submit: Special Toilet Cleaner x3\n\nRewards:\n• 2,500 EXP\n• 1,750 Currency'
    },
    {
        name: 'Night Fishing Preparation',
        info: 'Quest Giver: Vogo\nRequirements: Complete Explore Farm Town\nMap: Farm Town\n\nObjectives:\n• Check the fishing spot with a flashlight.\n\nRewards:\n• 1,500 EXP\n• 1,500 Currency\n• Headlamp x1\n• Unlock Item: Headlamp'
    },
    {
        name: 'Gym Buddy',
        info: 'Quest Giver: Mud\nRequirements: Complete Explore Farm Town\nMap: Farm Town\n\nObjectives:\n• Reach the quest location.\n• Submit: Protein Powder x1\n\nRewards:\n• 2,000 EXP\n• 1,600 Currency'
    },
    {
        name: 'Retrieve Circulation Unit',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Explore Farm Town\nMap: Farm Town\n\nObjectives:\n• Submit: Air Circulation Unit x1\n• Reach the quest location.\n\nRewards:\n• 4,000 EXP\n• 2,000 Currency'
    },
    {
        name: 'Finding the Beloved Car',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Explore Farm Town\nMap: Farm Town\n\nObjectives:\n• Mark the Black SUV.\n\nRewards:\n• 1,500 EXP\n• 800 Currency'
    },
    {
        name: 'Premium Sniper I',
        info: 'Quest Giver: Orange\nRequirements: Complete Proof of Strength I\nMap: Farm Town\n\nObjectives:\n• Kill Fly Captain x1\n• Use Weapon: M700\n• Location: Farm Town\n• Headshots required.\n• Kill Fly Member x2\n• Use Weapon: M700\n• Location: Farm Town\n• Headshots required.\n\nRewards:\n• 3,500 EXP\n• 3,500 Currency\n• Military Backpack MAX x1'
    },
    {
        name: 'Premium Sniper II',
        info: 'Quest Giver: Orange\nRequirements: Complete Proof of Strength I\nMap: Farm Town\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: Glick\n• Location: Farm Town\n• Headshots required.\n\nRewards:\n• 3,500 EXP\n• 3,500 Currency'
    },
    {
        name: 'Premium Sniper III',
        info: 'Quest Giver: Orange\nRequirements: Complete Proof of Strength I\nMap: Farm Town\n\nObjectives:\n• Carry Tire\n\nRewards:\n• 2,500 EXP\n• 2,000 Currency'
    },
    {
        name: 'Multi-Talented II',
        info: 'Quest Giver: Xavier\nRequirements: Complete Multi-Talented\nMap: Any\n\nObjectives:\n• Submit: Trumpet x1\n\nRewards:\n• 1,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'High Score Duck - Serpent Force',
        info: 'Quest Giver: Xiaoming\nRequirements: Visit the arcade in Map: Farm Town\nMap: Bunker\n\nObjectives:\n• Score 45 points in Serpent Force.\n\nRewards:\n• 2,500 EXP\n• 500 Currency'
    },
    {
        name: 'High Score Duck - Duck Miner',
        info: 'Quest Giver: Xiaoming\nRequirements: Visit the arcade in Map: Farm Town\nMap: Bunker\n\nObjectives:\n• Clear Level 10 in Golden Mining Duck.\n\nRewards:\n• 2,500 EXP\n• 500 Currency'
    },
    {
        name: 'High Score Duck - Carbonated Danger Duck',
        info: 'Quest Giver: Xiaoming\nRequirements: Visit the arcade in Map: Farm Town\nMap: Bunker\n\nObjectives:\n• Clear Level 5 in Carbonated Danger Duck.\n\nRewards:\n• 2,500 EXP\n• 500 Currency'
    },
    {
        name: 'A Talking Trophy!',
        info: 'Quest Giver: Jeff\nRequirements: Complete All-Rounder\nMap: Bunker\n\nObjectives:\n• Build Commemorative Trophy\n\nRewards:\n• 4,000 EXP\n• 5,000 Currency'
    },
    {
        name: 'Graduate Student List',
        info: 'Quest Giver: Jeff\nRequirements: Complete Special Toilet Cleaner\nMap: Farm Town\n\nObjectives:\n• Reach the quest location.\n• Submit: Graduate Student List x1\n\nRewards:\n• 2,800 EXP\n• 1,500 Currency\n• Unlock Item: BR Quick Magazine I\n• Sniper Rifle Extended Magazine I'
    },
    {
        name: 'Lumber Factory Survey',
        info: 'Quest Giver: Jeff\nRequirements: Complete Special Toilet Cleaner\nMap: Any\n\nObjectives:\n• Reach the quest location.\n• Reach the quest location.\n\nRewards:\n• 2,500 EXP\n• 1,000 Currency\n• Unlock Item: Pistol Muzzle Brake (Balanced A)\n• Unlock Item: SMG Muzzle Brake (Balanced A)\n• Unlock Item: Rifle Muzzle Brake (Balanced A)'
    },
    {
        name: 'Out With The Old',
        info: 'Quest Giver: Orange\nRequirements: Complete Toy Collector I\nMap: Any\n\nObjectives:\n• Submit: Airplane Model x1\n\nRewards:\n• 3,000 EXP\n• 500 Currency'
    },
    {
        name: 'Specific Medicine III',
        info: 'Quest Giver: Mud\nRequirements: Complete Gym Buddy\nMap: Farm Town\n\nObjectives:\n• Submit: Specific Headache Medicine x1\n• Kill Mercenary x3\n• Location: Farm Town\n\nRewards:\n• 2,200 EXP\n• 1,800 Currency\n• Unlock Item: Poison RES Injector'
    },
    {
        name: 'Archer',
        info: 'Quest Giver: Commemorative Trophy\nRequirements: Complete A Talking Trophy!\nMap: Any\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: Shoddy Bow\n\nRewards:\n• 4,000 EXP\n• 5,000 Currency\n• VPO-101 x1'
    },
    {
        name: 'Vida\'s Challenge',
        info: 'Quest Giver: Commemorative Trophy\nRequirements: Complete A Talking Trophy!\nMap: Farm Town\n\nObjectives:\n• Kill Vida x1\n• Use Weapon: Glick\n• Location: Farm Town\n\nRewards:\n• 5,000 EXP\n• 6,000 Currency'
    },
    {
        name: 'Proof of Strength II',
        info: 'Quest Giver: Orange\nRequirements: Complete Premium Sniper I, Premium Sniper II, and Premium Sniper III\nMap: Farm Town\n\nObjectives:\n• Kill Vida x1\n• Use Weapon: M700\n• Location: Farm Town\n• Headshots required.\n\nRewards:\n• 4,000 EXP\n• 4,000 Currency\n• Unlock Item: SV98'
    },
    {
        name: 'Frame-up',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Finding the Beloved Car\nMap: Farm Town\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: Electrified MP7\n• Location: Farm Town\n\nRewards:\n• 3,000 EXP\n• 1,800 Currency'
    },
    {
        name: 'Butcher Knife Master',
        info: 'Quest Giver: Commemorative Trophy\nRequirements: Complete Archer\nMap: Any\n\nObjectives:\n• Kill Mercenary x1\n• Use Weapon: Butcher Knife\n\nRewards:\n• 6,000 EXP\n• 648 Currency\n• Golden Star x1\n• Challenge Ferry Ticket x3'
    },
    {
        name: 'New Challenge',
        info: 'Quest Giver: Commemorative Trophy\nRequirements: Complete Butcher Knife Master\nMap: Warehouse Area\n\nObjectives:\n• Kill Speedy Group Commander x1\n• Use Weapon: Battle Axe\n• Location: Warehouse Area\n\nRewards:\n• 10,000 EXP\n• 10,000 Currency\n• Challenge Ferry Ticket x3\n• Unlock Item: Challenge Ferry Ticket'
    },
    {
        name: 'Vector Thruster',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Frame-up\nMap: Farm Town\n\nObjectives:\n• Submit: Vector Thruster Research Log x1\n\nRewards:\n• 3,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'Mysterious Door',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Frame-up\nMap: Farm Town\n\nObjectives:\n• Reach the quest location.\n\nRewards:\n• 2,800 EXP\n• 2,200 Currency\n• Unlock Item: Quick Stock'
    },
    {
        name: 'Role Model for Snipers',
        info: 'Quest Giver: Orange\nRequirements: Complete Proof of Strength II\nMap: J-Lab\n\nObjectives:\n• Kill Wanderer x5\n• Use Weapon: SV98\n• Location: J-Lab\n• Headshots required.\n\nRewards:\n• 5,000 EXP\n• 5,000 Currency\n• Unlock Item: Advanced AP Sniper Bullet'
    },
    {
        name: 'Mysterious Door Key',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Mysterious Door\nMap: Farm Town\n\nObjectives:\n• Submit: Lv.1 J-Lab Certificate x1\n\nRewards:\n• 3,500 EXP\n• 1,500 Currency\n• Lv.1 J-Lab Certificate x1'
    },
    {
        name: 'Radar Repair',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Mysterious Door\nMap: Farm Town\n\nObjectives:\n• Fix the Radar\n• Fix the Radar\n\nRewards:\n• 3,500 EXP\n• 3,500 Currency'
    },
    {
        name: 'Copy Pass',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Mysterious Door Key\nMap: Farm Town\n\nObjectives:\n• Submit: Lv.1 J-Lab Certificate x3\n\nRewards:\n• 3,500 EXP\n• 1,000 Currency\n• Unlock Item: Lv.1 J-Lab Certificate'
    },
    {
        name: 'Payback',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Mysterious Door Key\nMap: J-Lab\n\nObjectives:\n• Kill Wanderer x4\n• Location: J-Lab\n• Submit: Tape x1\n\nRewards:\n• 4,500 EXP\n• 4,000 Currency'
    },
    {
        name: 'Vector Thruster II',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Vector Thruster\nMap: Farm Town\n\nObjectives:\n• Submit: Spaceship Thruster Blueprint (Encrypted) x1\n\nRewards:\n• 3,500 EXP\n• 2,500 Currency'
    },
    {
        name: 'Install Life Support System',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Retrieve Circulation Unit\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Life Support System.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Unlock Beacon IV',
        info: 'Quest Giver: Jeff\nRequirements: Complete Mysterious Door Key\nMap: J-Lab\n\nObjectives:\n• Unlock J-Lab Beacon\n\nRewards:\n• 4,000 EXP\n• 2,500 Currency'
    },
    {
        name: 'Supplier\'s Recommendation',
        info: 'Quest Giver: Xavier\nRequirements: Complete Logistics Support\nMap: Farm Town\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: StG 77\n• Location: Farm Town\n• Kill Scavenger x4\n• Use Weapon: StG 77\n• Location: Farm Town\n\nRewards:\n• 3,000 EXP\n• 2,500 Currency\n• Unlock Item: StG 77'
    },
    {
        name: 'Never-Ending Foes',
        info: 'Quest Giver: Xavier\nRequirements: Complete Logistics Support\nMap: Warehouse Area\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: Bizon-2\n• Location: Warehouse Area\n• Headshots required.\n• Submit: Dog Tag x2\n\nRewards:\n• 2,000 EXP\n• 3,000 Currency\n• Unlock Item: AP Bullet (S)'
    },
    {
        name: 'Challenge: Speedy Group Commander',
        info: 'Quest Giver: Xavier\nRequirements: Complete Never-Ending Foes\nMap: Warehouse Area\n\nObjectives:\n• Kill Speedy Group Commander x1\n• Location Warehouse Area\n\nRewards:\n• 2,800 EXP\n• 1,800 Currency\n• Unlock Item: MP7'
    },
    {
        name: 'Clear the Lumber Mill',
        info: 'Quest Giver: Jeff\nRequirements: Complete Lumber Factory Survey\nMap: Any\n\nObjectives:\n• Kill Scavenger x3\n• Location: Warehouse Area\n• Kill Triple-Shot Man x1\n• Location: Farm Town\n• Kill Triple-Shot Kid x2\n• Location: Farm Town\n\nRewards:\n• 2,800 EXP\n• 2,200 Currency\n• Unlock Item: AP Bullet (L)'
    },
    {
        name: 'Casual Sports',
        info: 'Quest Giver: Xavier\nRequirements: Complete Challenge: Speedy Group Commander\nMap: Any\n\nObjectives:\n• Submit: Golf Club x1\n\nRewards:\n• 1,000 EXP\n• 4,000 Currency'
    },
    {
        name: 'Upgraded Version',
        info: 'Quest Giver: Jeff\nRequirements: Complete Clear the Lumber Mill\nMap: Any\n\nObjectives:\n• Submit: Military Handheld Radio x2\n• Submit 10,000 Currency\n• Submit: Thermite x3\n\nRewards:\n• 3,000 EXP\n• Blueprint: AK-103\n• Unlock Item: Blueprint: AK-103'
    },
    {
        name: 'Valuable Eyes',
        info: 'Quest Giver: Xavier\nRequirements: Complete Casual Sports\nMap: Farm Town\n\nObjectives:\n• Kill Mine Manager x1\n• Location: Farm Town\n• Avoid headshots.\n\nRewards:\n• 3,500 EXP\n• 3,000 Currency\n• Unlock Item: Advanced AP Bullet (S)'
    },
    {
        name: 'Night Threat',
        info: 'Quest Giver: Xavier\nRequirements: Complete Casual Sports\nMap: Farm Town\n\nObjectives:\n• Kill Lost Spider-Bot x1\n• Location: Farm Town\n\nRewards:\n• 3,500 EXP\n• 2,000 Currency\n• Unlock Item: Electric Grenade\n• Thermite x3'
    },
    {
        name: 'Arsonist',
        info: 'Quest Giver: Orange\nRequirements: Complete Clear the Lumber Mill\nMap: Farm Town\n\nObjectives:\n• Kill Mad Bomber x1\n• Location: Farm Town\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency\n• Unlock Item: Asbestos Overalls\n• Unlock Item: Asbestos Work Helmet'
    },
    {
        name: 'Defense Field',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Clear the Lumber Mill\nMap: Farm Town\n\nObjectives:\n• Submit: Cosmic Defense Field Blueprint (Encrypted) x1\n\nRewards:\n• 3,500 EXP\n• 1,000 Currency'
    },
    {
        name: 'Advertising Effect',
        info: 'Quest Giver: Xavier\nRequirements: Complete Night Threat\nMap: Farm Town\n\nObjectives:\n• Kill Security Captain x1\n• Use Weapon: StG 77\n• Location: Farm Town\n• Kill Security Guard x2\n• Use Weapon: StG 77\n• Location: Farm Town\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency\n• Unlock Item: SightPRO Helmet'
    },
    {
        name: 'Insufficient Computing Power',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Valuable Eyes\nMap: Farm Town\n\nObjectives:\n• Reach the quest location.\n• Mark the Supercomputer.\n\nRewards:\n• 3,500 EXP\n• 1,000 Currency'
    },
    {
        name: 'Defense Field II',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Defense Field\nMap: Any\n\nObjectives:\n• Submit: Polyethylene Sheet x10\n• Submit: Blue Barrel x1\n• Submit: Tape x3\n\nRewards:\n• 2,000 EXP\n• 4,000 Currency'
    },
    {
        name: 'Senior Courier',
        info: 'Quest Giver: Orange\nRequirements: Complete Arsonist\nMap: Farm Town\n\nObjectives:\n• Secure the package and complete the delivery.\n• Kill Any Enemy x6\n\nRewards:\n• 3,200 EXP\n• 1,000 Currency'
    },
    {
        name: 'Clean Up the School',
        info: 'Quest Giver: Orange\nRequirements: Complete Arsonist\nMap: Farm Town\n\nObjectives:\n• Kill School Bully x1\n• Location: Farm Town\n• Kill Alumnus x2\n• Location: Farm Town\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency\n• Unlock Item: Lv.4 Body Armor'
    },
    {
        name: 'Never Miss a Catch',
        info: 'Quest Giver: Vogo\nRequirements: Complete Night Fishing Preparation\nMap: Any\n\nObjectives:\n• Submit: Blue Barrel x1\n\nRewards:\n• 2,000 EXP\n• 3,000 Currency\n• Toy Fish x2\n• Canned Tuna in Water x3'
    },
    {
        name: 'Pest Control?!',
        info: 'Quest Giver: Vogo\nRequirements: Complete Night Fishing Preparation\nMap: Any\n\nObjectives:\n• Kill Spider-Bot x2\n• Location: Ground Zero\n• Kill Spider-Bot x2\n• Location: Warehouse Area\n• Kill Spider-Bot x2\n• Location: Farm Town\n\nRewards:\n• 3,500 EXP\n• 3,500 Currency\n• Unlock Item: Recipe: Protein Powder'
    },
    {
        name: 'Promotion to Expert Courier',
        info: 'Quest Giver: Orange\nRequirements: Complete Senior Courier\nMap: Farm Town\n\nObjectives:\n• Secure the first package and complete the delivery.\n• Secure the second package and complete the delivery.\n• Kill Any Enemy x7\n\nRewards:\n• 3,500 EXP\n• 1,200 Currency\n• Unlock Item: Rubber Overalls'
    },
    {
        name: 'Regular Customer',
        info: 'Quest Giver: Orange\nRequirements: Complete Senior Courier\nMap: Any\n\nObjectives:\n• Submit: Cannon x1\n\nRewards:\n• 3,000 EXP\n• 500 Currency\n• Tactical Knife Kit x1'
    },
    {
        name: 'Suspect',
        info: 'Quest Giver: Mud\nRequirements: Complete Senior Courier\nMap: Farm Town\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: Battle Axe\n• Farm Town\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency'
    },
    {
        name: 'Performance Release',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Insufficient Computing Power\nMap: Farm Town\n\nObjectives:\n• Submit: Large Motherboard x1\n• Kill Mine Manager x1\n• Location: Farm Town\n• Avoid headshots.\n\nRewards:\n• 4,000 EXP\n• 3,000 Currency'
    },
    {
        name: 'Space Crystal',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Collect Samples in Space Storm\nMap: Any\n\nObjectives:\n• Kill Storm Creature x1\n• Submit: Space Crystal x1\n\nRewards:\n• 3,500 EXP\n• 3,000 Currency\n• Contaminated Weapon Parts x1'
    },
    {
        name: 'Reference Materials',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Collect Samples in Space Storm\nMap: Any\n\nObjectives:\n• Submit: J-Lab Floppy Disk x1\n• Submit: Notebook x2\n\nRewards:\n• 3,500 EXP\n• 2,500 Currency\n• Unlock Item: AP Shotgun Shell\n• Unlock Item: Shotgun Muzzle Brake (Balanced A)'
    },
    {
        name: 'Irresistible',
        info: 'Quest Giver: Mud\nRequirements: Complete Suspect Map: Any\n\nObjectives:\n• Place Protein Powder in Ground Zero\n• Place Protein Powder in Warehouse Area\n• Place Protein Powder in Farm Town\n\nRewards:\n• 2,500 EXP\n• 450 Currency\n• Unlock Item: Endurance Injector'
    },
    {
        name: 'Expert Courier I',
        info: 'Quest Giver: Orange\nRequirements: Complete Promotion to Expert Courier\nMap: Farm Town\n\nObjectives:\n• Secure the package and complete the delivery.\n• Kill Any Enemy x8\n\nRewards:\n• 4,000 EXP\n• 1,500 Currency\n• Unlock Item: Quick Grip B\n• Unlock Item: Hip-Fire Grip I\n• Unlock Item: Survivor\'s Backpack'
    },
    {
        name: 'Super Cooling',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Performance Release\nMap: Farm Town\n\nObjectives:\n• Submit: Large Heat Sink x1\n\nRewards:\n• 5,000 EXP\n• 1,000 Currency'
    },
    {
        name: 'Super Power Supply',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Performance Release\nMap: Farm Town\n\nObjectives:\n• Submit: 5,000W Power Supply x1\n\nRewards:\n• 5,000 EXP\n• 1,000 Currency'
    },
    {
        name: 'Super Core',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Performance Release\nMap: Any\n\nObjectives:\n• Submit: Computing Core x4\n• Submit: Super Glue B x1\n• Submit: Super Glue A x1\n• Submit: Cables x4\n• Submit: Graphics Card x2\n\nRewards:\n• 2,000 EXP\n• 10,000 Currency'
    },
    {
        name: 'Galactic Star Map',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Copy Pass\nMap: J-Lab\n\nObjectives:\n• Submit: Star Map x1\n\nRewards:\n• 4,000 EXP\n• 3,000 Currency'
    },
    {
        name: 'Expert Courier II',
        info: 'Quest Giver: Orange\nRequirements: Complete Expert Courier I\nMap: Ground Zero\n\nObjectives:\n• Secure the package and complete the delivery.\n• Kill Any Enemy x8\n\nRewards:\n• 4,500 EXP\n• 2,000 Currency\n• Unlock Item: Vertical Grip I\n• Unlock Item: Horizontal Grip I'
    },
    {
        name: 'Gold Sniper',
        info: 'Quest Giver: Orange\nRequirements: Complete Role Model for Snipers\nMap: Any\n\nObjectives:\n• Kill Mad Bomber x2\n• Use Weapon: SV98\n• Location: Farm Town\n• Headshots required.\n• Kill Triple-Shot Man x2\n• Use Weapon: SV98\n• Location: Farm Town\n• Headshots required.\n• Kill Security Captain x2\n• Use Weapon: SV98\n• Location: Farm Town\n• Headshots required.\n\nRewards:\n• 6,000 EXP\n• 6,000 Currency\n• Unlock Item: M107\n• Unlock Item: Advanced AP Bullet (MAG)'
    },
    {
        name: 'Install Navigation System',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Galactic Star Map\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Navigation System.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Weapon Test - AK-103',
        info: 'Quest Giver: Jeff\nRequirements: Complete Upgraded Version\nMap: Farm Town\n\nObjectives:\n• Kill Mercenary x3\n• Use Weapon: AK-103\n• Location: Farm Town\n\nRewards:\n• 3,800 EXP\n• 3,200 Currency\n• Unlock Item: Advanced AP Bullet (AR)'
    },
    {
        name: 'Install Supercomputer',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Super Cooling, Super Power Supply, and Super Core\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Supercomputer.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Classified Intelligence',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Reference Materials\nMap: Farm Town\n\nObjectives:\n• Kill Senior Engineer x1\n• Submit: Intel File x1\n\nRewards:\n• 4,000 EXP\n• 3,000 Currency'
    },
    {
        name: 'Toy Collector II',
        info: 'Quest Giver: Orange\nRequirements: Complete Regular Customer\nMap: Any\n\nObjectives:\n• Submit: Intelligent Robot x1\n\nRewards:\n• 3,000 EXP\n• 500 Currency\n• Unlock Item: SCIFI Mask'
    },
    {
        name: 'Vector Thruster III',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Classified Intelligence and Vector Thruster II\nMap: Any\n\nObjectives:\n• Submit: Cannon x1\n• Submit: Pressure Sensor x1\n• Submit: Cippo x1\n\nRewards:\n• 2,000 EXP\n• 5,000 Currency'
    },
    {
        name: 'Soul Infusion',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Space Crystal\nMap: Any\n\nObjectives:\n• Submit: Glick x3\n\nRewards:\n• 4,000 EXP\n• 1,500 Currency\n• Space Glick x1'
    },
    {
        name: 'Special Weapon',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Soul Infusion\nMap: Farm Town\n\nObjectives:\n• Kill Shotgunner x1\n• Use Weapon: Space Glick\n• Location: Farm Town\n• Submit: TOZ-66 Dragon\'s Breath x1\n\nRewards:\n• 4,000 EXP\n• Unlock Item: Blueprint: TOZ-66 Dragon\'s Breath\n• TOZ-66 Dragon\'s Breath x1'
    },
    {
        name: 'Technical Upgrade',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Soul Infusion\nMap: Any\n\nObjectives:\n• Submit: Glick x5\n• Submit: Space Crystal x3\n• Submit: Contaminated Weapon Parts x2\n• Submit 5,000 Currency\n\nRewards:\n• 4,000 EXP\n• Unlock Item: Space Glick'
    },
    {
        name: 'Experimental Materials',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Special Weapon\nMap: Any\n\nObjectives:\n• Kill Storm Creature x6\n• Use Weapon: TOZ-66 Dragon\'s Breath\n• Submit: Space Crystal x6\n• Submit: Contaminated Weapon Parts x3\n\nRewards:\n• 5,000 EXP\n• 3,000 Currency\n• Unlock Item: Advanced AP Shotgun Shell'
    },
    {
        name: 'Purification',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Experimental Materials\nMap: Farm Town\n\nObjectives:\n• Submit: Crystal Filtration Unit x1\n• Submit: Crystal Booster x1\n• Submit: Accelerator x1\n\nRewards:\n• 5,000 EXP\n• 2,000 Currency\n• Unlock Item: Lv.5 Body Armor'
    },
    {
        name: 'Steroid Boss',
        info: 'Quest Giver: Mud\nRequirements: Complete Body Training\nMap: Warehouse Area\n\nObjectives:\n• Kill Speedy Group Commander x1\n• Location: Warehouse Area\n• While Speed Up is active\n• Kill Speedy Group Member x2\n• Location: Warehouse Area\n• While Speed Up is active\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency'
    },
    {
        name: 'Hot-Blooded Campus',
        info: 'Quest Giver: Mud\nRequirements: Complete Steroid Boss\nMap: Farm Town\n\nObjectives:\n• Kill School Bully x1\n• Use Weapon: Spiked Baseball Bat\n• Location: Farm Town\n• Submit: Spiked Baseball Bat x1\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency\n• Unlock Item: Hot-Blood Injector'
    },
    {
        name: 'Collect Energy',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Purification\nMap: Any\n\nObjectives:\n• Submit: Space Crystal x15\n• Submit: Vodka x5\n• Submit: Car Battery x2\n\nRewards:\n• 4,000 EXP\n• 7,500 Currency'
    },
    {
        name: 'Defense Field III',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Defense Field II\nMap: J-Lab\n\nObjectives:\n• Submit: Defense Field Generator x1\n\nRewards:\n• 3,500 EXP\n• 1,500 Currency'
    },
    {
        name: 'Defense Field IV',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Defense Field III\nMap: J-Lab\n\nObjectives:\n• Submit: Defense Field Operation Manual x1\n\nRewards:\n• 4,000 EXP\n• 2,000 Currency'
    },
    {
        name: 'Install Energy System',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Collect Energy\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Energy System.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Install Defense Field',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Defense Field IV\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Defense Field.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Specific Medicine IV',
        info: 'Quest Giver: Mud\nRequirements: Complete Hot-Blooded Campus\nMap: Farm Town\n\nObjectives:\n• Submit: Specific Painkiller x1\n• Kill Mercenary x5\n• Location: Farm Town\n\nRewards:\n• 2,500 EXP\n• 2,200 Currency\n• Unlock Item: Fire RES Injector'
    },
    {
        name: 'Specific Medicine V',
        info: 'Quest Giver: Mud\nRequirements: Complete Specific Medicine IV\nMap: Farm Town\n\nObjectives:\n• Submit: Strong Protein Powder x1\n\nRewards:\n• 3,500 EXP\n• 2,500 Currency\n• Unlock Item: Space RES Injector'
    },
    {
        name: 'Road to Fishing King I',
        info: 'Quest Giver: Vogo\nRequirements: Complete Fishing Novice\nMap: Any\n\nObjectives:\n• Submit: Bighead Goldfish x1\n• Submit: Red Goldfish x1\n\nRewards:\n• 1,500 EXP\n• 2,000 Currency\n• Unlock Item: Flat Cap'
    },
    {
        name: 'Road to Fishing King II',
        info: 'Quest Giver: Vogo\nRequirements: Complete Road to Fishing King I\nMap: Any\n\nObjectives:\n• Submit: Pink Goldfish x1\n• Submit: Purple Damselfish x1\n\nRewards:\n• 1,800 EXP\n• 3,000 Currency'
    },
    {
        name: 'Road to Fishing King III',
        info: 'Quest Giver: Vogo\nRequirements: Complete Road to Fishing King I\nMap: Any\n\nObjectives:\n• Submit: White Flatfish x1\n• Submit: Red Banded Fish x1\n\nRewards:\n• 1,800 EXP\n• 3,000 Currency\n• Unlock Item: Bait'
    },
    {
        name: 'Road to Fishing King IV',
        info: 'Quest Giver: Vogo\nRequirements: Complete Road to Fishing King II and Road to Fishing King III\nMap: Any\n\nObjectives:\n• Submit: Greenback Bighead Carp x1\n• Submit: Brown-white Grunt x1\n\nRewards:\n• 2,000 EXP\n• 5,000 Currency'
    },
    {
        name: 'Road to Fishing King V',
        info: 'Quest Giver: Vogo\nRequirements: Complete Road to Fishing King II and Road to Fishing King III\nMap: Any\n\nObjectives:\n• Submit: Green Porcupinefish x1\n• Submit: Red Bigeye Fish x1\n\nRewards:\n• 2,000 EXP\n• 4,000 Currency\n• Unlock Item: Blueprint: Decent Fishing Rod'
    },
    {
        name: 'King of Fishing',
        info: 'Quest Giver: Vogo\nRequirements: Complete Road to Fishing King IV and Road to Fishing King V\nMap: Any\n\nObjectives:\n• Submit: Azure Galaxias x1\n\nRewards:\n• 2,000 EXP\n• 6,000 Currency\n• Unlock Item: Tactical Salted Fish'
    },
    {
        name: 'Install Vector Thruster',
        info: 'Quest Giver: Xiaoming\nRequirements: Complete Vector Thruster III\nMap: Bunker\n\nObjectives:\n• Head to the spaceship and install the Vector Thruster.\n\nRewards:\n• 1,000 EXP'
    },
    {
        name: 'Eye for an Eye',
        info: 'Quest Giver: Jeff\nRequirements: Complete Install Energy System, Install Life Support System, Install Vector Thruster, Install Defense Field, and Install Supercomputer\nMap: Any\n\nObjectives:\n• Kill Pato Chapo x1\n• Use Weapon: Ak-47\n• Kill Speedy Group Commander x1\n• Use Weapon: Electrified MP7\n• Kill Shotgunner x1\n• Use Weapon: TOZ-66 Dragon\'s Breath\n• Kill Vida x1\n• Use Weapon: RPK\n• Kill Triple-Shot Man x1\n• Use Weapon: M1A\n• Kill Mad Bomber x1\n• Use Weapon: UP-45\n\nRewards:\n• 8,000 EXP\n• 8,000 Currency\n• Unlock Item: Advanced AP Bullet (L)\n• Unlock Item: MCX Spear'
    },
    {
        name: 'Unlock Beacon V',
        info: 'Quest Giver: Jeff\nRequirements: Defeat Roadblock\nMap: Storm Area\n\nObjectives:\n• Unlock Storm Area Beacon\n\nRewards:\n• 5,000 EXP\n• 3,500 Currency'
    },
    {
        name: 'Biological Investigation',
        info: 'Quest Giver: Jeff\nRequirements: Complete Unlock Beacon V\nMap: Storm Area\n\nObjectives:\n• Kill Storm Bug x1\n• Location: Storm Area\n• Kill Storm? x1\n• Submit: Storm Eye x3\n• Submit: Large Space Crystal x1\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency'
    },
    {
        name: 'Find the Four Horsemen',
        info: 'Quest Giver: Jeff\nRequirements: Complete Biological Investigation\nMap: Storm Area\n\nObjectives:\n• Reach the quest location.\n• Reach the quest location.\n• Reach the quest location.\n• Reach the quest location.\n\nRewards:\n• 3,500 EXP\n• 2,450 Currency\n• Unlock Item: Space Protection Helmet'
    },
    {
        name: 'The Four Horsemen',
        info: 'Quest Giver: Jeff\nRequirements: Complete Find the Four Horsemen\nMap: Storm Area\n\nObjectives:\n• Kill Gulu Gulu x1\n• Location: Storm Area\n• Kill Pala Pala x1\n• Location: Storm Area\n• Kill Billy Billy x1\n• Location: Storm Area\n• Kill Pulu Pulu x1\n• Location: Storm Area\n\nRewards:\n• 4,000 EXP\n• 3,500 Currency\n• Unlock Item: Blueprint: Ultimate Space Protection Helmet'
    },
    {
        name: 'The First Test Subject',
        info: 'Quest Giver: Jeff\nRequirements: Complete Find the Four Horsemen\nMap: Storm Area\n\nObjectives:\n• Reach the quest location.\n\nRewards:\n• 4,500 EXP\n• 3,800 Currency\n• Unlock Item: Space Protection Suit'
    },
    {
        name: 'Koko Koko',
        info: 'Quest Giver: Jeff\nRequirements: Complete The First Test Subject\nMap: Storm Area\n\nObjectives:\n• Kill Koko Koko x1\n• Location: Storm Area\n\nRewards:\n• 8,000 EXP\n• 6,000 Currency\n• Unlock Item: Blueprint: Ultimate Space Protection Suit'
    }
]
</script>

<style scoped>
.quests-view {
    padding: 40px 0;
    min-height: 100vh;
}

.page-header {
    margin-bottom: 48px;
    text-align: left;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-heading);
    margin-bottom: 16px;
    line-height: 1.2;
}

.page-subtitle {
    font-size: 1.125rem;
    color: var(--text-primary);
    margin-bottom: 8px;
    line-height: 1.6;
}


.table-container {
    overflow-x: auto;
    border-radius: 8px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
}

.quests-table {
    width: 100%;
    border-collapse: collapse;
}

.quests-table th {
    background-color: var(--bg-secondary);
    color: var(--text-heading);
    font-weight: 600;
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid var(--border-color);
    font-size: 0.875rem;
}

.quest-name-col {
    width: 250px;
}

.info-col {
    min-width: 500px;
}

.quests-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: var(--bg-card);
}

.quests-table tbody tr:nth-child(even) td {
    background-color: rgba(21, 21, 21, 0.6);
}

.quests-table tbody tr:hover td {
    background-color: var(--bg-card-hover);
}

.quest-name-cell {
    font-weight: 600;
    color: var(--text-heading);
    font-size: 1rem;
    vertical-align: top;
}

.info-cell {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-line;
}

@media (max-width: 1024px) {
    .info-col {
        min-width: 300px;
    }
}

@media (max-width: 768px) {
    .quests-view {
        padding: 20px 0;
    }

    .page-title {
        font-size: 1.75rem;
    }

    .page-subtitle {
        font-size: 1rem;
    }

    .quests-table th,
    .quests-table td {
        padding: 12px 8px;
        font-size: 0.875rem;
    }

    .quest-name-col {
        width: 150px;
    }

    .info-col {
        min-width: 250px;
    }
}
</style>
