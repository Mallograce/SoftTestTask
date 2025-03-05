export interface Library {
  Category: string;
  ChiefName: string;
  ChiefOrg: string;
  ChiefPosition: string;
  ClarificationOfWorkingHours: string;
  CommonName: string;
  Email: EmailItems[];
  Fax: FaxItems[];
  FullName: string;
  NumOfReaders: number;
  NumOfSeats: number;
  NumOfVisitors: number;
  ObjectAddress: ObjectAddressItems[];
  OrgInfo: OrgInfoItems[];
  PublicPhone: PublicPhoneItems[];
  ShortName: string;
  WebSite: string;
  WorkingHours: WorkingHoursItems[];
  geoData: GeoDataItem;
  geodata_center: string;
  global_id: number;
}

interface EmailItems {
  Email: string;
}

interface FaxItems {
  Fax: string;
}

interface ObjectAddressItems {
  Address: string;
  AdmArea: string;
  Availability: Availability[];
  District: string;
  PostalCode: string;
}

interface Availability {
  available_k: string;
  available_o: string;
  available_z: string;
  available_s: string;
  available_element: AvailableElement[]
}

interface AvailableElement {
  Area_mgn: string;
  Element_mgn: string;
  Group_mgn: string;
  available_degree: string;
  available_index: string;
}

interface OrgInfoItems {
  ChiefName: string;
  ChiefPhone: ChiefPhone[];
  ChiefPosition: string;
  FullName: string;
  INN: string;
  KPP: string;
  LegalAddress: string
}

interface ChiefPhone {
  ChiefPhone: string;
}

interface PublicPhoneItems {
  PublicPhone: string
}

interface WorkingHoursItems {
  DayWeek: string;
  WorkHours: string;
}

interface GeoDataItem {
  coordinates: number[][];
  type: string;
}
