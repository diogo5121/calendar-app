import Events from "../../models/InternalEvents";

export async function DeleteEvent(id: string): Promise<Boolean | null> {
    try {
        const event = await Events.findOne({ where: { id } });
        if (!event) {
            console.log(`Event with id ${id} not found.`);
            return null; // Return null if the event does not exist
        }
        
        await event.destroy(); // Use await to ensure the event is destroyed before returning
        return true;
    } catch (error) {
        console.error("Error while deleting event: ", error);
        return null; // Return null in case of any error
    }
}
