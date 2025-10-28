<template>
    <div class="notes-view">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">Escape From Duckov - All Collectible Notes</h1>
                <p class="page-subtitle">Track down all 56 collectible notes hidden around Duckov's maps using this
                    guide</p>
                <p class="page-note">Note: Guide is work-in-progress!</p>
            </div>

            <div class="table-container">
                <table class="notes-table">
                    <thead>
                        <tr>
                            <th class="item-col">Item</th>
                            <th class="info-col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="note in notesData" :key="note.number">
                            <td class="item-cell">{{ note.item }}</td>
                            <td class="info-cell">{{ note.info }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
const notesData = [
    { number: '001', item: 'Hideout Notes', info: 'Location: On top of an end table next to the bed', location: 'Bunker' },
    { number: '002', item: 'Assembly Room Notes', info: 'Location: On the workbench in the Assembly Room', location: 'Bunker' },
    { number: '004', item: 'Welcome Back to the Bunker', info: 'Location: On top of a cinder block next to the Bunker Entrance', location: 'Ground Zero' },
    { number: '005', item: "Rampaging Scavenger's Diary", info: 'Location: On the yellow box behind the wall', location: 'Ground Zero' },
    { number: '006', item: 'Scavenging Tips', info: 'Location: On top of a pallet next to a wooden crate', location: 'Ground Zero' },
    { number: '007', item: 'Roadside Friendly Reminder', info: 'Location: On the wooden pallet near the Data Box', location: 'Ground Zero' },
    { number: '008', item: 'Road Camp Notes', info: 'Location: On top of a stack of cinder blocks', location: 'Ground Zero' },
    { number: '009', item: 'Ground Zero Watch Log', info: 'Location: On the edge of the overlook', location: 'Ground Zero' },
    { number: '010', item: 'Sightings Report on Lordon', info: 'Location: On top of a stack of cardboard boxes', location: 'The Warehouse' },
    { number: '011', item: 'Secret of the Cellar', info: 'Location: On a table in the center of the house', location: 'The Warehouse' },
    { number: '012', item: "Speedy Group Commander's Diary", info: 'Location: On top of a red barrel', location: 'The Warehouse' },
    { number: '013', item: 'Cola Processing Materials', info: 'Location: On top of a small crate', location: 'The Warehouse' },
    { number: '014', item: 'Gas Leak Incident', info: 'Location: Inside the Cellar', location: 'The Warehouse' },
    { number: '015', item: "Mad Bomber's Diary 1", info: 'Location: On top of a pallet in the office of the chemical plant', location: 'Farm Town' },
    { number: '016', item: "Mad Bomber's Diary 2", info: 'Location: On a table underneath a shipping container', location: 'Farm Town' },
    { number: '017', item: 'Cola Factory Notes', info: 'Location: On top of a crate in the chemical plant', location: 'Farm Town' },
    { number: '018', item: "The School Bully's Story", info: 'Location: On top of a yellow crate', location: 'Farm Town' },
    { number: '019', item: 'Mining Notes', info: 'Location: On the front counter of the gas station', location: 'Farm Town' },
    { number: '020', item: 'Mysterious Merchant Sighting Report', info: 'Location: On top of a crate on a hill', location: 'Farm Town' },
    { number: '021', item: 'About the Mercenaries in Farm Town', info: 'Location: Inside a tent on a crate', location: 'Farm Town' },
    { number: '022', item: "Lobby Manager's Diary", info: 'Location: On a desk in a central room of the city hall', location: 'Farm Town' },
    { number: '023', item: 'Lobby Clerk', info: 'Location: On the front counter of the city hall', location: 'Farm Town' },
    { number: '024', item: "Town Hall Staff's Notes", info: 'Location: On top of a desk in city hall', location: 'Farm Town' },
    { number: '025', item: 'Anonymous Supermarket Report', info: 'Location: On a counter inside the supermarket', location: 'Farm Town' },
    { number: '026', item: "Ex-J-Lab Employee's Diary", info: 'Location: On top of the bed in Staff Apartment 102', location: 'Farm Town' },
    { number: '027', item: "Arcade Machine's Sentience", info: 'Location: On the corner of the pool table in the arcade', location: 'Farm Town' },
    { number: '028', item: 'Incomplete Notes', info: 'Location: On top of a stack of crates', location: 'Farm Town' },
    { number: '029', item: 'Construction Site Notes', info: 'Location: On top of a stack of bags', location: 'Farm Town' },
    { number: '030', item: 'About Lab Layout', info: 'Location: On top of a long desk', location: 'J-Lab' },
    { number: '031', item: 'Hidden Room', info: 'Location: On top of a stack of pallets', location: 'J-Lab' },
    { number: '032', item: 'Mysterious Houses in Farm Town', info: 'Location: On a shelf', location: 'J-Lab' },
    { number: '033', item: 'About the Teleporter', info: 'Location: On top of a crate near the J-Lab Beacon', location: 'J-Lab' },
    { number: '034', item: 'About the Sleep Pods', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '035', item: 'Biological Experiment Notes', info: 'Location: On top of a table', location: 'J-Lab' },
    { number: '036', item: 'Energy Weapon', info: 'Location: On top of a desk in the entrance room', location: 'J-Lab' },
    { number: '037', item: "Lab Director's Report", info: 'Location: On top of a desk near the door', location: 'J-Lab' },
    { number: '038', item: 'Records on Spacecraft Construction', info: 'Location: On top of a desk in the corner', location: 'J-Lab' },
    { number: '039', item: 'Research on Storm Matter', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '040', item: 'Research on Blue Crystals', info: 'Location: On top of a long table', location: 'J-Lab' },
    { number: '041', item: 'Records on the Mysterious Aircraft', info: 'Location: On top of a crate', location: 'J-Lab' },
    { number: '042', item: 'Rift Observation Report', info: 'Location: On top of a table', location: 'J-Lab' },
    { number: '043', item: 'Legends of the Umbrella Cult', info: 'Location: On top of a desk in the house', location: 'Farm Town' },
    { number: '044', item: 'Pre-Storm Sighting Report', info: 'Location: On top of a table in a tent', location: 'Storm Area' },
    { number: '045', item: 'Cave Secrets of Ground Zero', info: 'Location: On top of a table inside the warehouse', location: 'The Warehouse' },
    { number: '046', item: 'Test Subject Record 1', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '047', item: 'Test Subject Record 2', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '048', item: 'Test Subject Record 3', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '049', item: 'Test Subject Record 4', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '050', item: 'Test Subject Record 5', info: 'Location: On top of a desk', location: 'J-Lab' },
    { number: '051', item: 'Fishing Notes 1', info: 'Location: On top of the blue barrel next to the docks', location: 'Bunker' },
    { number: '052', item: 'Fishing Notes 2', info: 'Location: On top of a fence next to a lake', location: 'Ground Zero' },
    { number: '053', item: 'Fishing Notes 3', info: 'Location: On the fishing boat', location: 'Ground Zero' },
    { number: '054', item: 'Fishing Notes 4', info: 'Location: On top of a rock next to the path', location: 'The Warehouse' },
    { number: '055', item: 'Fishing Notes 5', info: 'Location: On top of a barrel on a dock', location: 'Farm Town' },
    { number: '056', item: '???Research???', info: 'Location: On the wall surrounding a grassy patch with trees', location: 'Farm Town' }
]
</script>

<style scoped>
.notes-view {
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

.page-note {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-style: italic;
}

.table-container {
    overflow-x: auto;
    border-radius: 8px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
}

.notes-table {
    width: 100%;
    border-collapse: collapse;
}

.notes-table th {
    background-color: var(--bg-secondary);
    color: var(--text-heading);
    font-weight: 600;
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid var(--border-color);
    font-size: 0.875rem;
}

.item-col {
    width: 300px;
}

.info-col {
    min-width: 500px;
}

.notes-table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: var(--bg-card);
}

.notes-table tbody tr:nth-child(even) td {
    background-color: rgba(21, 21, 21, 0.6);
}

.notes-table tbody tr:hover td {
    background-color: var(--bg-card-hover);
}

.item-cell {
    font-weight: 600;
    color: var(--text-heading);
    font-size: 1rem;
}

.info-cell {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
}

@media (max-width: 1024px) {
    .info-col {
        min-width: 300px;
    }
}

@media (max-width: 768px) {
    .notes-view {
        padding: 20px 0;
    }

    .page-title {
        font-size: 1.75rem;
    }

    .page-subtitle {
        font-size: 1rem;
    }

    .notes-table th,
    .notes-table td {
        padding: 12px 8px;
        font-size: 0.875rem;
    }

    .item-col {
        width: 150px;
    }

    .info-col {
        min-width: 250px;
    }
}
</style>