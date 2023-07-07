import type { DirectusActivity } from "./activity.js";
import type { DirectusCollection } from "./collection.js";
import type { DirectusDashboard } from "./dashboard.js";
import type { DirectusField } from "./field.js";
import type { DirectusFile } from "./file.js";
import type { DirectusFlow } from "./flow.js";
import type { DirectusFolder } from "./folder.js";
import type { DirectusNotification } from "./notification.js";
import type { DirectusOperation } from "./operation.js";
import type { DirectusPanel } from "./panel.js";
import type { DirectusPermission } from "./permission.js";
import type { DirectusPreset } from "./preset.js";
import type { DirectusRelation } from "./relation.js";
import type { DirectusRole } from "./role.js";
import type { DirectusSettings } from "./settings.js";
import type { DirectusShare } from "./share.js";
import type { DirectusUser } from "./user.js";
import type { DirectusWebhook } from "./webhook.js";

export interface CoreSchema<Schema extends object = object> {
    directus_activity: DirectusActivity<Schema>[];
    directus_collections: DirectusCollection<Schema>[];
    directus_dashboards: DirectusDashboard<Schema>[];
    directus_fields: DirectusField<Schema>[];
    directus_files: DirectusFile<Schema>[];
    directus_flows: DirectusFlow<Schema>[];
    directus_folders: DirectusFolder<Schema>[];
    directus_notifications: DirectusNotification<Schema>[];
    directus_operations: DirectusOperation<Schema>[];
    directus_panels: DirectusPanel<Schema>[];
    directus_permissions: DirectusPermission<Schema>[];
    directus_presets: DirectusPreset<Schema>[];
    directus_relations: DirectusRelation<Schema>[];
    directus_roles: DirectusRole<Schema>[];
    directus_settings: DirectusSettings<Schema>;
    directus_shares: DirectusShare<Schema>[];
    directus_users: DirectusUser<Schema>[];
    directus_webhooks: DirectusWebhook<Schema>[];
}